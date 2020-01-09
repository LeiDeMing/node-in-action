let previousCpuUseage = process.cpuUsage();
let previousHrTime = process.hrtime();

setInterval(() => {
    const currentCpuUsage = process.cpuUsage(previousCpuUseage);
    const currentHrTime = process.hrtime(previousHrTime);
    const duration = currentHrTime[0] * 1e6 + currentHrTime[1] / 1e3;
    previousHrTime = currentHrTime;
    previousCpuUseage = currentCpuUsage;
    const cpuPercent = {
        user: currentCpuUsage.user / duration,
        system: currentCpuUsage.system / duration
    }
    console.log(cpuPercent)
}, 2000)