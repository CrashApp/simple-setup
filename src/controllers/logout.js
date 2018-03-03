
var express = require('express')

function logout(){


var api = express.Router()

api.get('/logout', function(req, res){
  console.log("Logging Out")
  req.logout()
  res.redirect('/')
})


return api
}

module.exports = logout