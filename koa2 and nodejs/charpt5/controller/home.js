const HomeService = require('../service/home')
module.exports = {
    index: async (ctx, next) => {
        ctx.render('/home/index',{title:'Hello Nei'})
    },
    home: async (ctx, next) => {
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        ctx.response.body = '<h1>HOME page</h1>';
    },
    homeParams: async (ctx, next) => {
        console.log(ctx.params);
        ctx.response.body = '<h1>HOME page /:id/:name'
    },
    user: async (ctx, next) => {
        await ctx.render('home/login',{
            btnName:'Go'
        })
    },
    login: async (ctx, next) => {
        console.log(ctx.request.body);
        const { name, password } = ctx.request.body;
        let res = await HomeService.login(name,password)
        if(res.status === -1){
            await ctx.render('home/login',{data : res.data});
        }else{
            await ctx.render('home/success',{data : res.data})
        }
    }
}