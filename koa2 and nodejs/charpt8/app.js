const Koa = require('koa'),
    router = require('koa-router');
const middleware = require('./middleware');
const app = new Koa();

middleware(app);

app.listen(3000, () => {
    console.log('server start ')
})