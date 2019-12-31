const Koa = require('Koa'),
    bodyParse = require('koa-bodyparser'),
    views = require('koa-views'),
    Router = require('koa-router');
// db = require('./db')
const app = new Koa(),
    router = new Router();

//顺序调用中间件
// app.use((ctx,next)=>{
//     next()
//     console.log('1')
// })

// app.use((ctx,next)=>{
//     process.nextTick(()=>{
//         next();
//         console.log('2')
//     })
// })

// app.use(async (ctx,next)=>{
//     await next()
//     console.log('1')
// })

// app.use((ctx,next)=>{
//     process.nextTick(()=>{
//         next();
//         console.log('2')
//     })
// })

//Koa路由
// router.get('/', async (ctx, next) => {
//     ctx.response.body = `<h1>Index</h1>
//     <form action="/login" method="post">
//         <p>Name: <input type="text" name="name"/></p>
//         <p>Password: <input type="password" name="password"/></p>
//         <p><input type="submit" Value="Submit"/></p>
//     </form>`

// });

// router.post('/login', async (ctx, next) => {
//     const body = ctx.request.body
//     let name = body.name || '',
//         password = body.password || '';
//     if(name === 'nei' && password === '123'){
//         ctx.body('Success')
//     }else{
//         ctx.body('Login error')
//     }
// })

// app
//     .use(bodyParse())
//     .use(router.routes());

app.use(views(__dirname + 'static/index.html', { extension: 'ejs' }))
console.log('服务开始')
app.listen(3001)