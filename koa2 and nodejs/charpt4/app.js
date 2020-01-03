const Koa = require('koa'),
    querystring = require('querystring'),
    router = require('koa-router')();
const app = new Koa();

//querystring
// router.get('/home', async (ctx, next) => {
//     console.log(ctx.request.query);
//     console.log(ctx.request.querystring);
//     ctx.response.body = `<h1>Home Pate</h1>`
// })


//路由参数
router.get('/home/:id/:name', async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = `<h1>/home/:id/:name</h1>`
});
app.use(router.routes())
console.log('服务开始')
app.listen(3001)