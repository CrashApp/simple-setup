var mongoose = require('mongoose')
var url = 'mongodb://admin2:admin2@ds235788.mlab.com:35788/adminpanel'
//var url = "localhost:27017"


function connectToDB(){
	mongoose.connect(url, function(err, db){
		if(err){
			console.log("There was an error connecting to the database: " + err)
			throw err
		}
		else console.log("connected to DB successful!!!!!!!!!")
	})
}

module.exports = connectToDB