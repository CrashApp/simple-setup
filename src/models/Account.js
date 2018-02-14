var mongoose = require('mongoose')
var Schema = new mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose')

var Account = new mongoose.Schema({
  user: String,
  password: String,
  goingTo: Array
})

Account.plugin(passportLocalMongoose)

module.exports = mongoose.model('Account', Account)
