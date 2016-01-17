var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

module.exports = function(server,session,sessionStore) {
    server.set('port', process.env.PORT || 8080);
    server.set('view engine', 'jade');
    server.set('views', path.join(__dirname, '../views'));
    server.use(favicon(__dirname + '../../../public/imgs/wendy-favicon.png'));
    server.use(bodyParser.json());
    server.use(logger('dev'));
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(express.static(path.join(__dirname, '../../public')));
};