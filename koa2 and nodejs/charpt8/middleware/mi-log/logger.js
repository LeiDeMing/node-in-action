const log4js = require('log4js');
const baseInfo = require('../../config');
const access = require('./access');
const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark']
module.exports = (options) => {
    const contextLogger = {};
    const appenders = {};
    const opts = Object.assign({}, baseInfo, options);
    const {
        env,
        appLogLevel,
        dir,
        serverIp,
        projectName
    } = opts;
    const commonInfo = {
        projectName,
        serverIp
    };
    if (env === 'dev' || evn === 'development') {
        appenders.out = {
            type: 'console'
        }
    }
    appenders.cheese = {
        type: 'dateFile',
        filename: 'logs/task',
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true
    }
    log4js.configure({
        appenders,
        categories: {
            default: {
                appenders: Object.keys(appenders),
                level: appLogLevel
            }
        }
    });
    const logger = log4js.getLogger('cheese');
    return async (ctx, next) => {
        const startTime = Date.now();
        methods.forEach((method, i) => {
            contextLogger[method] = (message) => logger[method](access(ctx, message, commonInfo))
        });
        ctx.log = contextLogger;
        await next();
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        logger.info(access(ctx, {
            responseTime: `响应时间为${responseTime/1000}s`
        }, commonInfo));
    }
}