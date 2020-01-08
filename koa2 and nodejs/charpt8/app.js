const Koa = require('koa'),
    router = require('koa-router');
const app = new Koa();
const middleware = require('./middleware');

middleware(app);

app.listen(3000, () => {
    console.log('server start ')
})