const express = require('express');

const app = express();

// connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://mydbadmin:admin123@ds129823.mlab.com:29823/mydb');


const restRouter = require('./routes/rest');

// app.get('/', (req, res) => {
// 	res.send('hello world from express');
// })

app.use('/api/v1', restRouter);

app.listen(3000, () => {
	console.log('App is listening to port 3000!');
});