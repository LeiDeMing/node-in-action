const router = require('koa-router')();
const {
    getAllCustomers,
    getCustomerById,
    getCustomerByName,
    updateCustomer,
    createCustomer,
    deleteCustomer
} = require('./db/controller');
const jsonMIME = 'Content-Type:application/json'
module.exports = (app) => {
    router.get('/customer', async (ctx, next) => {
        const customers = await getAllCustomers();
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0,
            data: customers
        }
    });
    router.get('/customer/:id', async (ctx, next) => {
        const id = ctx.params.id;
        const customer = await getCustomerById(id);
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0,
            data: customer
        };
    });
    router.get('customer/name/:name', async (ctx, next) => {
        const name = ctx.params.name;
        const customer = await getCustomerByName(name);
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0,
            data: customer
        };
    });
    router.post('/customer', async (ctx, next) => {
        const customer = ctx.body;
        await createCustomer(customer);
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0
        };
    });
    router.put('/customer/:id', async (ctx, next) => {
        const id = ctx.params.id;
        const customer = ctx.body;
        await updateCustomer(id, customer);
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0
        };
    });
    router.delete('/customer/:id', async (ctx, next) => {
        const id = ctx.params.id;
        await deleteCustomer(id);
        ctx.type = jsonMIME;
        ctx.body = {
            status: 0
        };
    })
    app
        .use(router.routes())
        .use(router.allowedMethods())
        .use(async (ctx, next) => {
            try {
                await next()
            } catch (err) {
                ctx.type = jsonMIME;
                ctx.body = {
                    sttus: -1,
                    message: err
                }
            }
        })
}