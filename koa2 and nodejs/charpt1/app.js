const koa = require('koa');
const app = new koa();

//获取post参数 
app.use(async (ctx) => {
    let postData = '';
    ctx.req.on('data', (data) => {
        postData += data
    })
    ctx.req.on('end', () => {
        console.log(postData)
    })
})

console.log('服务开始')
app.listen(3001)