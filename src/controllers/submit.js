var express = require('express')
var models = require('../models/index')
var Setting = models.Setting
var jobs = require('../jobs/index')
var Objects = require('../models/Objects')

var settings = jobs.stripSettingsSchema(Objects.settings, false)
var settings = jobs.convertToArrOfObjects(settings)

let updateOptions = {
  new: true,
  upsert: true
}

function submit(){

	var api = express.Router()

	api.get('/', function(req, res){
		res.render('setup.jade', {user: req.user, settings: settings})
	})

	api.post('/', function(req, res){
		console.log("posting to server*****")
		
		//looks for apiVersions to update
		let updateConditions = {
			"app.apiVersion": req.body['app.apiVersion']
		}
		//sets what to update to relevant fields
		let whatToUpdate = jobs.stripSettingsSchema(req.body)
		console.log(JSON.stringify(whatToUpdate))
		whatToUpdate = jobs.getExtras(req.body, whatToUpdate)


		Setting.findOneAndUpdate(updateConditions, whatToUpdate, updateOptions, function(err, setting){
			if(err){
				console.log('Error saving to database: ' + err)
				throw err
			}
			else{
				console.log("********* it worked ******** " + setting)
				res.render('success.jade', {data: req.body, user: req.user})
			}
		})



		


	})

return api
}

module.exports = submit