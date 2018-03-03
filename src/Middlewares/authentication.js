var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var models = require('../models/index')

var Account = models.Account



passport.use(new LocalStrategy(function(username, password, done){
	Account.findOne({username: username}, function(err, user){
		console.log("THE USER IS    " + user)
		if(err){ return done(err)}
		if(!user){return done(null, false)}
		if(user.password !==  password){return done(null, false)}
		return done(null, user)
	})
}))

passport.serializeUser(function(user, callback){
	callback(null, user.username)
})

passport.deserializeUser(function(username, callback){
	Account.findOne({username: username}, function(err, user){
		if(err){return callback(err)}
		callback(null, user)
	})
})

module.exports = passport