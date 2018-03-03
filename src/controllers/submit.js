var express = require('express')
var models = require('../models/index')
var Setting = models.Setting
var jobs = require('../jobs/index')

let updateOptions = {
  new: true,
  upsert: true
}

function submit(){

	var api = express.Router()

	api.get('/', function(req, res){
		console.log("posting to server")
		res.send("posted server data")
	})

	api.post('/', function(req, res){
		console.log("posting to server*****")
		
		//looks for apiVersions to update
		let updateConditions = {
			"app.apiVersion": req.body['app.apiVersion']
		}
		//sets what to update to relevant fields
		console.log("REQ BODY!!!!!!!!!")
		console.log(req.body)
		let whatToUpdate = jobs.stripSettingsSchema(req.body)
		console.log(JSON.stringify(whatToUpdate))
		whatToUpdate = jobs.getExtras(req.body, whatToUpdate)


		Setting.findOneAndUpdate(updateConditions, whatToUpdate, updateOptions, function(err, setting){
			if(err){
				console.log('Error saving to database: ' + err)
				throw err
			}
			else console.log("********* it worked ******** " + setting)
		})



		res.send(Object.keys(req.body))


	})

return api
}

module.exports = submit