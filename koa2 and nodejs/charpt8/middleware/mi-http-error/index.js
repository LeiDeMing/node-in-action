const path = require('path'),
    nunjucks = require('nunjucks');
module.exports = (opts = {}) => {
    let fileName = 'other';
    const evn = opts.env || process.env.NODE_ENV || 'development';
    const folder = opts.errorPageFolder;
    const templatePath = path.resolve(__dirname, '../../views/errorPage/error.html')
    return async (ctx, next) => {
        try {
            await next();
            if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404);
        } catch (e) {
            let status = parseInt(e.status);
            const message = e.message;
            if (status >= 400) {
                switch (status) {
                    case 400:
                    case 404:
                    case 500:
                        fileName = status;
                        break;
                    default:
                        status = fileName = 'other';
                        break;
                }
            }
            const filePath = folder ? path.join(folder, `${fileName}.html`) : templatePath;
            try {
                nunjucks.configure(folder ? folder : __dirname);
                const data = await nunjucks.render(filePath, {
                    env: evn,
                    status: e.status || e.message,
                    error: e.message,
                    stack: e.stack
                });
                ctx.status = status;
                ctx.body = data
            } catch (e) {
                ctx.throw(500, '错误页面渲染失败')
            }
        }
    }
}