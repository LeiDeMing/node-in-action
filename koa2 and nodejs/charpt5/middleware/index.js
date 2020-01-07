const path = require('path'),
    bodyParser = require('koa-bodyparser'),
    nunjucks = require('koa-nunjucks-2'),
    static = require('koa-static');
const miSend = require('./mi-send');

module.exports = (app) =>{
    app
    .use(static(
        path.join(__dirname,'public'),
        {
            maxage:30 * 24 * 60 * 60 * 1000
        }
    ))
    .use(bodyParser())
    .use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, 'views'),
        nunjucksConfig: {
            trimBlocks: true
        }
    }))
    .use(miSend())
    ;
}