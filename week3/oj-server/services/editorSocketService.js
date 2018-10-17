var redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;

// export a function
module.exports = function(io) {
	// collaboration sessions
	// record all the participants in each session
	// so that server can send changes to all participants in a session
	var collaborations = {};

	// map from socketId to sessionId
	var socketIdToSessionId = {};

	var sessionPath = '/temp_sessions/';

	// when 'connection' event happends
	io.on('connection', (socket) => {
		// get sessionId
		let sessionId = socket.handshake.query['sessionId'];

		socketIdToSessionId[socket.id] = sessionId;
		// if sessionId is not in collaborations, it means no one
		// does this problem before
		// add current socket id to collaboration session participants
		// if (!(sessionId in collaborations)) {
		// 	collaborations[sessionId] = {
		// 		'participants' : []
		// 	};
		// }

		if (sessionId in collaborations) {
			collaborations[sessionId]['participants'].push(socket.id);
		} else {
			redisClient.get(sessionPath + sessionId, (data) => {
				if(data) {
					console.log('session teminated previously, pulling back from redis');
					collaborations[sessionId] = {
						'participants': [],
						'cachedInstructions': JSON.parse(data)
					}

					// given a problem id, I know all participants
					collaborations[sessionId]['participants'].push(socket.id);

					// get all participants of the current session
					console.log(collaborations[sessionId]['participants']);
				} else {
					console.log('creating new session');
					collaborations[sessionId] = {
						'participants': [],
						'cachedInstructions': []
					}

					// given a problem id, I know all participants
					collaborations[sessionId]['participants'].push(socket.id);
				}
			});
			
		}

		
		

		// socket event listeners
		// delta is the change info
		// it records the row and column of the changes
		socket.on('change', delta => {
			// log, easy for debuging
			console.log("change " + socketIdToSessionId[socket.id] + ': ' + delta);
			// get sesssion id based on socket.id
			let sessionId = socketIdToSessionId[socket.id];
			if (sessionId in collaborations) {
				collaborations[sessionId]['cachedInstructions'].push(
					["change", delta, Date.now()])
				// get all participants in this session
				let participants = collaborations[sessionId]['participants'];
				// send changes to all participants
				for (let i = 0; i < participants.length; i++) {
					// skip the one who created this
					if (socket.id != participants[i]) {
						io.to(participants[i]).emit("change", delta);
					} 
				}
			} else {
				console.log('warning: could not find socket id in collaborations');
			}
		});

		socket.on('restoreBuffer', () => {
			let sessionId = socketIdToSessionId[socket.id];
			console.log('restore buffer for session: ' + sessionId + ', socket: ' + socket.id);

			if (sessionId in collaborations) {
				let instructions = collaborations[sessionId]['cachedInstructions'];

				for (let i = 0; i < instructions.length; i++) {
					socket.emit(instructions[i][0], instructions[i][1]);
				}
			} else {
				console.log('no collaboration found for this socket');
			}
		});

		socket.on('disconnect', () => {
			let sessionId = socketIdToSessionId[socket.id];
			console.log('disconnect sesssion: ' + sessionId + ', socket: ' + socket.id);

			console.log(collaborations[sessionId]['participants']);

			let foundAndRemoved = false;

			if (sessionId in collaborations) {
				let participants = collaborations[sessionId]['participants'];
				let index = participants.indexOf(socket.id);

				if (index >= 0) {
					participants.splice(index, 1);
					foundAndRemoved = true;

					// if participants.length is 0, this is the last one
					// leaving the session
					if (participants.length == 0) {
						console.log('last participants is leaving, commit to redis');

						let key = sessionPath + sessionId;
						let value = JSON.stringify(
							collaborations[sessionId]['cachedInstructions']);

						redisClient.set(key, value, redisClient.redisPrint);

						redisClient.expire(key, TIMEOUT_IN_SECONDS);
						delete collaborations[sessionId];
					}
				}
			}

			if (!foundAndRemoved) {
				console.log('warning: could not find socket id in collaborations');
			}
		});
	});
}