const koa = require('koa');
const app = new koa();

//获取post参数 
// app.use(async (ctx) => {
//     let postData = '';
//     ctx.req.on('data', (data) => {
//         postData += data
//     })
//     ctx.req.on('end', () => {
//         console.log(postData)
//     })
// })

//先进先出
// app.use(async (ctx, next) => {
//     console.log('one start')
//     await next();
//     console.log('one end');
// });
// app.use(async (ctx, next) => {
//     console.log('two start')
//     await next();
//     console.log('two end');
// });app.use(async (ctx, next) => {
//     console.log('three start')
//     await next();
//     console.log('three end');
// });

//获取响应时间
app.use(async (ctx, next) => {
    let sTime = new Date().getTime();
    await next();
    let eTIme = new Date().getTime();

    ctx.response.type = 'text/html';
    ctx.response.body = 'Hello World';
    console.log(eTIme - sTime);
})

app.use(async (ctx, next) => {
    console.log('中间件开始');
    await next()
    console.log('中间件结束')
})

console.log('服务开始')
app.listen(3001)