var User = require('../models').User

exports.addUser = (data) => User.create(data)

exports.getUserByName = (name) => User.findOne({username: name}).exec()
