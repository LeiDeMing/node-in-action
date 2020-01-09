const path = require('path');
const miLog = require('./mi-log');
const miHttpError = require('./mi-http-error');
module.exports = (app) => {
    app
        .use(miHttpError({errorPageFolder:path.resolve(__dirname,'../views/errorPage')}))
        .use(miLog())
}