const express = require('express');
const path = require('path');

const app = express();

// connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://mydbadmin:admin123@ds129823.mlab.com:29823/mydb', {useNewUrlParser: true});


const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

// app.get('/', (req, res) => {
// 	res.send('hello world from express');
// })

app.use('/api/v1', restRouter);
app.use(express.static(path.join(__dirname, '../public')));
// app.use((req, res) => {
// 	res.sendFile('index.html', {root: path.join(__dirname, '../public')});
// });

app.listen(3000, () => {
	console.log('App is listening to port 3000!');
});

