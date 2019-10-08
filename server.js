var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
var mongoose = require('mongoose');
var port = process.env.PORT || '80';

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.use('/dado/', require('./routes/dados'));

var server = http.createServer(app);

server.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Listening on port ' + port);
        mongoose.connect('mongodb+srv://kinazen:123456az@cluster0-skw4p.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
            if (error) {
                console.log("Could not connect to MongoDB.");
                throw error;
            } else {
                console.log("Connected to MongoDB.");
            }
        });
    }
});

module.exports = app;
