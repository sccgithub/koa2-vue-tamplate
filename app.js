var Koa = require('koa')
var convert = require('koa-convert')
var logger = require('koa-logger')
var bodyparser = require('koa-bodyparser')
var errorhandler = require('koa-errorhandler')
var config = require('config-lite')
var scheme = require('koa-scheme')
var gzip = require('koa-gzip')
var routerApi = require('./routers/index.js')

var app = new Koa()

app.use(convert(errorhandler()))
app.use(convert(bodyparser()))
app.use(convert(logger()))
app.use(convert(scheme(config.schemeConfig)))
// app.use(convert(routerCache(config.routerCacheConfig)))
app.use(convert(gzip()))
app.use(convert(routerApi.routes()))

app.listen(config.port)

module.exports = app
