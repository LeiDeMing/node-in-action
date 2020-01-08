const log4js = require('log4js');
const methods = ['trace','debug','info','warn','error','fatal','mark']
module.exports = (options) => {
    const contextLogger = {};
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
    return async (ctx, next) => {
        const startTime = Date.now();
        methods.forEach((method,i)=>{
            contextLogger[method] = (message) => logger[method](message)
        });
        ctx.log = contextLogger;
        await next();
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        logger.info(`响应时间为${responseTime/1000}s`);
    }
}