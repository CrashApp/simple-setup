var mongoose = require('mongoose')
var Schema = new mongoose.Schema

var Setting = new mongoose.Schema({

	 app: {		
		apiVersion: String,
		bodyLimitInKB: String,
		isDebug: Boolean,
		showLogs: Boolean,
		extra: {},
 	},
	 db: {
	   provider: String,
	   host: String,
	   port: Number,
	   name: String,
	   username: String,
	   password: String,
	   extra: {},
 	},
	twilio: {
	   phone: String,
	   countryCode: String,
	   sid: String,
	   auth: String,
	   extra: {},
	},
	authentication: {
	   timeOutInSeconds: Number,
	   maxDigits: Number,
	   authTokenExpiresInSeconds: Number, //86400 = 24 hours
	   secretLoginLength: Number,
	   extra: {},
	},
	sceneFormation: {
	   rangeOfSight: Number,
	   extra: {},
	},
	extra: {}
  })



module.exports = mongoose.model('Setting', Setting)
