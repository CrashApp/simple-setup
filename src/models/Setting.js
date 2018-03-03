var mongoose = require('mongoose')
var Objects = require('./Objects')
var Schema = new mongoose.Schema


var Setting = new mongoose.Schema(Objects.settings)



module.exports = mongoose.model('Setting', Setting)
