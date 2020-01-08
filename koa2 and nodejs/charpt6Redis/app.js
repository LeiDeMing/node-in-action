const Koa = require('koa'),
    redis = require('redis'),
    {
        promisify
    } = require('util'),
    session = require('koa-session');
const app = new Koa();
const client = redis.createClient(6379, '127.0.0.1');
const hgetallAsync = promisify(client.hgetall).bind(client);
const store = {
    get: async (key, maxAge) => {
     const target = await hgetallAsync(key);
    //  store.destroy(key);
     return target;
    },
    set: (key, sess, masAge) => {
        console.log(key,sess)
        client.hmset(key, sess);
    },
    destroy: (key) => {
        client.hdel(key);
    }
};
const CONFIG = {
    key: 'myAppSessKey',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    store
};
app.keys = ['some secret hurr'];

app
    .use(session(CONFIG, app))
    .use(ctx => {
        if (ctx.path === '/favicon.ico') return;
        let n = ctx.session.views || 0;
        ctx.session.views = ++n;
        ctx.body = n + ' views';
    });

app.listen(3000, () => {
    console.log('server start')
})