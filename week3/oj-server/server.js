const express = require('express');
const path = require('path');
var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();
const app = express();

// connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds129823.mlab.com:29823/mydb', {useNewUrlParser: true});
//mongoose.connect('mongodb://user:user@ds117858.mlab.com:17858/problems', {useNewUrlParser: true});

const restRouter = require('./routes/rest');
//const indexRouter = require('./routes/index');
var editorSocketService = require('./services/editorSocketService')(io);

// app.get('/', (req, res) => {
// 	res.send('hello world from express');
// })

app.use('/api/v1', restRouter);
app.use(express.static(path.join(__dirname, '../public')));
// if the url does not handled by router on the server side, then
// the server send index.html from the public folder
app.use((req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

// app.listen(3000, () => {
// 	console.log('App is listening to port 3000!');
// });

// connect io with server
const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', () => {
	console.log('App is listening to port 3000.')
});

