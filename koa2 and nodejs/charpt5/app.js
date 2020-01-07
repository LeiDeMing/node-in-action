const Koa = require('koa'),
    nunjucks = require('koa-nunjucks-2'),
    path = require('path'),
    static = require('koa-static'),
    bodyParser = require('koa-bodyparser');
const app = new Koa(),
    middleware = require('./middleware'),
    router = require('./router');

middleware(app)
router(app);
app.listen(3000, () => {
    console.log('server is runnig')
})