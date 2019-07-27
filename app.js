const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const port = process.env.PORT || 8081;
const { getHomePage, postMessage } = require('./routes/index');

const app = express();
app.use(express.static('assets'))

//to read post request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug') //configure template engine
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view

app.use('assets', express.static(__dirname + '/assets')) // to find image assets
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico'))); // for the favicon

//server node
app.listen(port, function(){
  console.log(`Server running ${port}`);
});

//routes
app.get('/', getHomePage);
app.post('/send/to/toto', postMessage);

module.exports = app;