import argparse
import atexit
import happybase
import json
import logging

from kafka import KafkaConsumer

logger_format = '%(asctime)-15s %(message)s'
logging.basicConfig(format=logger_format)
logger = logging.getLogger('data-storage')
logger.setLevel(logging.DEBUG)

# Default kafka broker location
kafka_broker = '127.0/0/1:9092'

# Default table in hbase
data_table = 'cryptocurrency'

# Default hbase host
hbase_host = 'myhbase'

def persist_data(data, hbase_connection, data_table):
	"""
	Persist data into hbase.
	"""
	try:
		logger.debug('Start to persist data to hbase %s', data)
		parsed = json.loads(data)
		symbol = parsed.get('Symbol')
		price = float(parsed.get('LastTradePrice'))
		timestamp = parsed.get('Timestamp')

		table = hbase_connection.table(data_table)
		row_key = "%s-%s" % (symbol, timestamp)
		logger.info('Storing values with row key %s' % row_key)
		table.put(row_key, {'family:symbol' : str(symbol), 'family:timestamp' :str(timestamp), 'family:price' : str(price)})
		logger.info('Persisted data to hbase for symbol: %s, price: %f, timestamp: %s', symbol, price, timestamp)

	except Exception as e:
		logger.error('Failed to persist data to hbase for %s', str(e))


def shutdown_hook(consumer, connection):
	"""
	a shutdown hook to be called before the shutdown
	"""
	try:
		logger.info('Closing Kafka consumer.')
		consumer.close()
		logger.info('Kafka consumer closed.')
		logger.info('Closing Hbase connection.')
		connection.close()
		logger.info('Hbase connection closed.')
	except Exception as e:
		logger.warn('Failed to close consumer/connection, caused by: %s', str(e))
	finally:
		logger.info('Exiting program')


if __name__ == '__main__':
	# Setup command line arguments.
	parser = argparse.ArgumentParser()
	parser.add_argument('topic_name', help='the kafka topic to subscribe from.')
	parser.add_argument('kafka_broker', help='the location of the kafka broker.')
	parser.add_argument('data_table', help='the data table to use.')
	parser.add_argument('hbase_host', help='the host name of hbase.')

	# Parse arguments
	args = parser.parse_args()
	topic_name = args.topic_name
	kafka_broker = args.kafka_broker
	data_table = args.data_table
	hbase_host = args.hbase_host

	# Initiate a simple kafka consumer
	consumer = KafkaConsumer(topic_name, bootstrap_servers=kafka_broker)

	# Initiate a hbase connection
	hbase_connection = happybase.Connection(hbase_host)

	# Create table if not exists
	if data_table not in hbase_connection.tables():
		hbase_connection.create_table(data_table, {'family': dict()})

	# Setup proper shutdown hook
	atexit.register(shutdown_hook, consumer, hbase_connection)

	for msg in consumer:
		persist_data(msg.value, hbase_connection, data_table)



