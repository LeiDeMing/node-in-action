const Koa = require('Koa'),
    bodyParse = require('koa-bodyparser'),
    views = require('koa-views'),
    session = require('koa-session'),
    redis = require('redis'),
    bluebird = require('bluebird'),
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

// app.use(views(__dirname + 'static/index.html', { extension: 'ejs' }))

//session
// const CONFIG = {
//     key: 'login',
//     maxAge: 86400000,
//     overwrite: true,
//     httpOnly: true,
//     signed: false
// };

// router.get('/', (ctx, next) => {
//     ctx.session.login = true;
//     ctx.body = 'Hello'
// });

// router.get('/verity', (ctx, next) => {
//     ctx.body = 'Login status ' + ctx.session.login
// })

// app
//     .use(session(CONFIG, app))
//     .use(router.routes())

//连接redis
// const client = redis.createClient('6379', '127.0.0.1')
// client.on('error', err => {
//     console.log(err)
// })
// client.on('ready', () => {
//     console.log('ready')
// })
// client.set('name','Nei',redis.print)
// client.get('name', (err, print) => {
//     console.log(print)
// })
// client.del('name',redis.print)

//全部改写promise
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
const client = redis.createClient('6379', '127.0.0.1');
client.on('error', err => {
    console.log(err)
});
client.on('ready', () => {
    console.log('ready')
});
const CONFIG = {
    key: 'login',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: false,
    store: {}
};
CONFIG.store.get = async function (key) {
    const result = await client.getAsync(key)
    CONFIG.store.destroy(key)
    console.log(`get result: ${result}`)
}
CONFIG.store.set = async function (key, value) {
    const result = await client.setAsync(key, JSON.stringify(value))
    console.log(`set result: ${result}`)
}
CONFIG.store.destroy = async function (key) {
    const result = await client.delAsync(key)
    console.log(`del result: ${result}`)
}
app.use(session(CONFIG, app))
app.use(async ctx => {
    if (ctx.path === '/favicon.ico') return
    ctx.session.agent = ctx.header['user-agent']
})


console.log('服务开始')
app.listen(3001)