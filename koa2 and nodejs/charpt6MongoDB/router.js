const router = require('koa-router');
const {
    connect,
    close
} = require('./db/login');
const {
    getCourseList,
    getCourseById,
    getCourseByTime,
    addCourse,
    updateCourse,
    removeCourse
} = require('./db/controller');
const jsonMIME = 'Content-Type:application/json'
module.exports = (app) => {
    router.get('/course', async (ctx) => {
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0,
            data: await getCourseList()
        };
    });

    router.get('/course/:id', async (ctx) => {
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0,
            data: await getCourseById(ctx.params.id)
        };
    });

    router.post('/course', async (ctx) => {
        ctx.type = jsonMIME;
        await addCourse();
        ctx.body = {
            status: 0
        };
    });

    router.put('/course/:id', async (ctx) => {
        await updateCourse(ctx.params.id, ctx.body);
        ctx.body = {
            status: 0
        };
    });

    router.delete('/course/:id', async (ctx) => {
        await removeCourse(ctx.params.id);
        ctx.body = {
            status: 0
        };
    });

    app
        .use(router.routes())
        .use(router.allowedMethods())
        .use(async (ctx, next) => {
            await connect();
            await next();
            await close();
        })
}