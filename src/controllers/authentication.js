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
		res.render('home', {user: req.user})
	}
	else res.render('home')
})

// api.post('/',
// 	passportMiddleware.authenticate('local', {
// 		successRedirect: '/',
// 		failureRedirect: '/'
// 	})
// )

api.post('/',
	passportMiddleware.authenticate('local'), 
	function(req, res){
		res.render('setup', {user: req.user})
	}
)



return api

}

module.exports = auth