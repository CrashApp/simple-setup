
var express = require('express')
var passportMiddleware = require('../middlewares/authentication')
var models = require('../models/index')
var LocalStrategy = require('passport-local').Strategy



function auth(){
// var Account = models.Account()
// passport.use(new LocalStrategy(Account.authenticate()))
// passport.serializeUser(Account.serializeUser())
// passport.deserializeUser(Account.deserializeUser())

	var api = express.Router()

	api.get('/', function(req, res){
		if(req.user){
			res.render('home.jade', {user: req.user})
		}
		else res.render('home.jade')
	})

	api.post('/',
		passportMiddleware.authenticate('local'), 
		function(req, res){
			res.redirect('/submit')
			//res.render('setup.jade', {user: req.user, settings: settings})
		}
	)

	return api
}

module.exports = auth