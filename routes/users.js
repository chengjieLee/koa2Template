const router = require('koa-router')();
const services = require('../query')
const xss = require('xss');

router.get(url, async (ctx, next) => {
  // 注册get方法 
  //  ctx.request.query  接受get参数
  // ctx.body  设置返回的json数据
})

router.post(url, async (ctx, next) => {
  // 注册get方法 
  //  ctx.request.body  接受post参数
  // ctx.body  设置返回的json数据
})
module.exports = router;
