const router = require('koa-router')();
const { index, home, homeParams, user, login } = require('./controller/home')
module.exports = (app) => {
    router.get('/', index);
    router.get('/home', home);
    router.get('/home/:id/:name', homeParams);
    router.get('/user', user);
    router.post('/user/login', login);
    app
        .use(router.routes())
        .use(router.allowedMethods())
}