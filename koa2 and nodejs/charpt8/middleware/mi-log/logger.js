const log4js = require('log4js');
module.exports = (options) => {
    return async (ctx, next) => {
        const startTime = Date.now();
        log4js.configure({
            appenders: {
                cheese: {
                    type: 'file',
                    filename: 'cheese.log'
                }
            },
            categories: {
                default: {
                    appenders: ['cheese'],
                    level: 'info'
                }
            }
        });
        const logger = log4js.getLogger('cheese');
        await next();
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        logger.info(`响应时间为${responseTime/1000}s`)
    }
}