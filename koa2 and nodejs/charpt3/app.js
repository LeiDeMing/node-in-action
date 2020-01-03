const Koa = require('koa'),
    router = require('koa-router')();
const app = new Koa();

//多中间件
router.get('user', '/user/:id', (ctx, next) => {
    let id = ctx.params.id
    ctx.user = id
    next()
}, (ctx, next) => {
    console.log(ctx.user)
})

app.use(router.routes())
console.log('服务开始')
app.listen(3001)