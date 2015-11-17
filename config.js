'use strict';

var path = require('path');

module.exports = {
    HOST: process.env.OPENSHIFT_NODEJS_IP || 'localhost',
    PORT: process.env.OPENSHIFT_NODEJS_PORT || 8080,

    LOG_DIR: path.join(__dirname, 'log'),
    PUBLIC_DIR: path.join(__dirname, 'public')
};
