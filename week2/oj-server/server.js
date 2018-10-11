const express = require('express');

const app = express();

const restRouter = require('./routes/rest');

// app.get('/', (req, res) => {
// 	res.send('hello world from express');
// })

app.use('/api/v1', restRouter);

app.listen(3000, () => {
	console.log('App is listening to port 3000!');
});