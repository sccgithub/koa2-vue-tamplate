var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
})

UserSchema.index({username: 1})

module.exports = mongoose.model('User', UserSchema)
