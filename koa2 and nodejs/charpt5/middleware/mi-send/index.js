module.exports = () => {
    function render(json){
        this.set('Content-Tyep','application/json');
        this.body = JSON.stringify(json)
    }
    return async (ctx,next)=>{
        ctx.send = render.bind(ctx);
        await next();
    }
}