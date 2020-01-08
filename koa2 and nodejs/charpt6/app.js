const Sequelize = require('sequelize'),
    Koa = require('koa');
const app = new Koa(),
    router = require('./router'),
    db = require('./db');

router(app);

app.listen(3001, () => {
    console.log('server start')
})