const koa = require('Koa')()
koa.use(ctx=>{
    console.log(ctx.request)
})
console.log('服务开始')
koa.listen(3001)