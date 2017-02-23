import Router from 'koa-router'
import Crypto from 'crypto'
import jwt from 'jsonwebtoken'
const userOprt = require('../../lib/user.js')
let user = new Router()

user.post('/adduser', async (ctx, next) => {
  // console.log('adduser')
  try {
    let queryMsg = await userOprt.getUserByName(ctx.request.body.username)
    console.log(queryMsg)
    if (queryMsg && queryMsg.username === ctx.request.body.username) {
      ctx.body = JSON.stringify({
        status: 0,
        message: '添加失败，用户名已存在'
      })
      console.log(ctx.body)
    } else {
      ctx.request.body.password = Crypto.createHmac('sha256', ctx.request.body.password)
                                        .update('qwer')
                                        .digest('hex')
      let createMsg = await userOprt.addUser(ctx.request.body)
      console.log(createMsg)
      if (createMsg && createMsg.username === ctx.request.body.username) {
        console.log('1')
        ctx.body = JSON.stringify({
          status: 1,
          message: '添加成功'
        })
      }
    }
  } catch (e) {
    console.log(e)
  }
})

user.post('/token', async (ctx, next) => {
  try {
    let queryMsg = await userOprt.getUserByName(ctx.request.body.username)
    if (queryMsg) {
      ctx.request.body.password = Crypto.createHmac('sha256', ctx.request.body.password)
                                        .update('qwer')
                                        .digest('hex')
      if (queryMsg.password === ctx.request.body.password) {
        ctx.body = JSON.stringify({
          status: 1,
          token: jwt.sign({username: ctx.request.body.username}, 'cms')
        })
      } else {
        ctx.body = JSON.stringify({
          status: 0,
          message: '用户名或密码错误'
        })
      }
    } else {
      ctx.body = JSON.stringify({
        status: 0,
        token: '用户名或密码错误'
      })
    }
  } catch (e) {
    console.log(e)
  }
})

module.exports = user
