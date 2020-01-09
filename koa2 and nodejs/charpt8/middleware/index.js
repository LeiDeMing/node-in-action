const path = require('path');
const miLog = require('./mi-log');
const miHttpError = require('./mi-http-error');
module.exports = (app) => {
    app
        .use(miHttpError({
            errorPageFolder: path.resolve(__dirname, '../views/errorPage')
        }))
        .use(miLog())
        .on('error', (error, ctx) => {
            if (ctx && !ctx.headerSent && ctx.status < 500) {
                ctx.status = 500;
            }
            if (ctx && ctx.log && ctx.log.error) {
                if (!ctx.state.logged) {
                    ctx.log.error(err.stack);
                }
            }
        })
}