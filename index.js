'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var gizoogle = require('gizoogle');
var morgan = require('morgan');
var config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.all('/translate', function(req, res, next) {
    var text = req.body.text || req.query.text;
    if (!text) {
        res.json({ text: 'You sent an empty text' });
    }

    gizoogle.string(text, function(error, translated) {
        if (error) return next(error);

        res.json({ text: translated, response_type: 'in_channel' });
    });
});

app.listen(config.PORT, config.HOST, function() {
    console.info('App started on http://' + config.HOST + ':' + config.PORT);
});
