const router = require('koa-router')();
module.exports = (app) => {
    router.get('/', async (ctx, next) => {
        ctx.response.body = '<h1>index page</h1>';
    });
    router.get('/home', async (ctx, next) => {
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        ctx.response.body = '<h1>HOME page</h1>';
    });
    router.get('/home/:id/:name', async (ctx, next) => {
        console.log(ctx.params);
        ctx.response.body = '<h1>HOME page /:id/:name'
    });
    router.get('/user', async (ctx, next) => {
        ctx.response.body = `<form action="/user/login" method="post">
        <input type="text" name="name" placeholder="请输入用户名 ikcamp"/>
        <br/>
        <input type="password" name="password" placeholder="请输入密码"/>
        <br/>
        <button>Go Go Go</button>
        </form>`;
    });
    router.post('/user/login', async (ctx, next) => {
        console.log(ctx.request.body);
        const { name, password } = ctx.request.body;
        if (name === 'ikcamp' && password === '123') {
            ctx.response.body = `Hello ${name}`;
        }else{
            ctx.response.body = '账号错误'
        }
    });
    app
        .use(router.routes())
        .use(router.allowedMethods())
}