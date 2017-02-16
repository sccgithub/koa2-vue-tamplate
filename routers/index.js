import Router from 'koa-router'
import user from './user/index.js'
let api = new Router()
api.use('/api', user.routes())
module.exports = api
