const Koa = require('koa'),
    nunjucks = require('koa-nunjucks-2'),
    path = require('path'),
    static = require('koa-static'),
    bodyParser = require('koa-bodyparser');
const app = new Koa(),
    router = require('./router');

app
    .use(bodyParser())
    .use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, 'views'),
        nunjucksConfig: {
            trimBlocks: true
        }
    }))
    .use(static(
        path.join(__dirname,'public'),
        {
            maxage:30 * 24 * 60 * 60 * 1000
        }
    ));
router(app);
app.listen(3000, () => {
    console.log('server is runnig')
})