const Koa = require('koa'),
    { sign } = require('jsonwebtoken'),
    bodyParse = require('koa-bodyparser'),
    router = require('koa-router')();
const app = new Koa(),
    secret = 'demo';
const jwt = require('koa-jwt')({ secret })

//多中间件
// router.get('user', '/user/:id', (ctx, next) => {
//     let id = ctx.params.id
//     ctx.user = id
//     next()
// }, (ctx, next) => {
//     console.log(ctx.user)
// })

//token验证
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/api/post" method="post">
        <p>Name: <input type="text" name="username"/></p>
        <p>Password: <input type="password" name="password"/></p>
        <p><input type="submit" Value="Submit"/></p>
    </form>`

});

router.post('/api/post', async (ctx, next) => {
    const user = ctx.request;
    console.log(user)
    if (user && user.username) {
        const { username } = user;
        const token = sign({ username }, secret, { expiresIn: '1h' });
        ctx.body = {
            message: 'get token success',
            code: '200',
            token
        }
    } else {
        ctx.body = {
            message: 'get Error',
            code: '400'
        }
    }
});

app
    .use(bodyParse())
    .use(router.routes())
console.log('服务开始')
app.listen(3002)