'use strict';

var express = require('express');
var app = express();
var config = require("./config")
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var router = require('./routes/router')
var mongoose = require('mongoose')
var passport = require('passport')




app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(express.static('./public'))
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/',express.static(path.join(__dirname, '/public')));
//app.use('/', express.static(process.cwd() + '/src/public'));
console.log("cwd" + process.cwd() + '/src/public')

//mongoose.connect('mongodb://admin2:admin2@ds131258.mlab.com:31258/emails')

app.use('/', router)

module.exports = app