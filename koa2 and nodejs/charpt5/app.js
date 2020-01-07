const Koa = require('koa'),
    nunjucks = require('koa-nunjucks-2'),
    path = require('path'),
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
    }));
router(app);
app.listen(3000, () => {
    console.log('server is runnig')
})