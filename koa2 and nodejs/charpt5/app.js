const Koa = require('koa'),
    bodyParser = require('koa-bodyparser');
const app = new Koa(),
    router = require('./router');

app.use(bodyParser());
router(app);
app.listen(3000,()=>{
    console.log('server is runnig')
})