
var express = require('express')

function logout(){

	var api = express.Router()

	api.get('/', function(req, res){
	  console.log("Logging Out")
	  req.logout()
	  res.render('home', {logout: true})
	})


return api
}

module.exports = logout