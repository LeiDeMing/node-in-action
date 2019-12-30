const Koa = require('Koa');
const app = new Koa()

app.use((ctx,next)=>{
    next()
    console.log('1')
})

app.use((ctx,next)=>{
    process.nextTick(()=>{
        next();
        console.log('2')
    })
})

console.log('服务开始')
app.listen(3001)