// let previousCpuUseage = process.cpuUsage();
// let previousHrTime = process.hrtime();

// setInterval(() => {
//     const currentCpuUsage = process.cpuUsage(previousCpuUseage);
//     const currentHrTime = process.hrtime(previousHrTime);
//     const duration = currentHrTime[0] * 1e6 + currentHrTime[1] / 1e3;
//     previousHrTime = currentHrTime;
//     previousCpuUseage = currentCpuUsage;
//     const cpuPercent = {
//         user: currentCpuUsage.user / duration,
//         system: currentCpuUsage.system / duration
//     }
//     console.log(cpuPercent)
// }, 2000)

// const pidusage = require('pidusage');
// setInterval(() => {
//     pidusage(process.pid, (err, stats) => {
//         console.log(stats)
//     })
// },2000)

// const v8 = require('v8');
// const usage = process.memoryUsage();
// const heapStatistics = v8.getHeapSpaceStatistics();
// console.log(usage, heapStatistics)

//qps
// const http = require('http');
// let count = 0;
// let previousTime = Date.now();

// function inc() {
//     count++;
// }

// function qps() {
//     const now = Date.now();
//     const duration = now - previousTime;
//     previousTime = now;
//     const qps = count * 1000 / duration;
//     count = 0;
//     console.log(qps)
//     return qps;
// }

// const server = http.createServer((req, res) => {
//     inc();
// })
// server.listen(3000, () => {
//     console.log('server start');
// })
// setInterval(qps,1000)

//tps
// const http = require('http');
// let duration = 0;
// let count = 0;
// http.createServer((req, res) => {
//     const start = Date.now();
//     count++;
//     duration += (Date.now() - start);
// }).listen(3000);
// setInterval(() => {
//     let averageResponseTime = count === 0 ? 0 : duration / count;
//     duration = 0;
//     count = 0;
//     console.log(averageResponseTime)
// },1000)

//事件代理
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
    const {
        protocol,
        href,
        headers
    } = ctx;
    const startTime = Date.now();
    app.emit('beginRequest', {
        protocol,
        href,
        headers
    });
    await next();
    const {
        status
    } = ctx;
    const responseTime = Date.now() - startTime;
    app.emit('endRequest', {
        status,
        responseTime
    });
})

function averageResponseTime() {
    const count = 0;
    const duration = 0;
    app.on('endRequest', ({
        responseTime
    }) => {
        count++;
        duration += responseTime;
    });
    setInterval(() => {
        const averageResponseTime = duration / count;
        duration = 0;
        count = 0;
    })
}