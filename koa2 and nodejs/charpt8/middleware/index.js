const miLog = require('./mi-log');

module.exports = (app) => {
    app.use(miLog)
}