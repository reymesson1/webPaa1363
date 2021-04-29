var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
app.use(cors())
app.options('*', cors())
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
app.use(express.static('static'))
app.use(bodyParser.json());
var masterController = require('./controller/masterController');

app.get('/master', masterController.getMaster)

app.post('/master', masterController.setMaster);

app.listen(8085, function(){
    console.log("Listening from 8085...");
});