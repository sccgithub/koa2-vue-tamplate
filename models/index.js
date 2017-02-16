var mongoose = require('mongoose')
var config = require('config-lite').mongodb

mongoose.connect(config.url, {promiseLibrary: require('bluebird')}, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.url, err.message)
    process.exit(1)
  }
})

exports.User = require('./user.js')
