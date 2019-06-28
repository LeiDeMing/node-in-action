var http=require('http');
var fs=require('fs');
var net=require('net');
// const fs=require('fs').createReadStream('../shi.txt',{heighWaterMark:10})
// var data=[]
// fs.on('data',(chunk)=>{
//     data.push(chunk)
//     console.log(chunk)
// })
// fs.on('end',()=>{
//     var buf=Buffer.concat(data)
//     console.log(buf.toString())
// })


// let txt=fs.readFileSync('../shi.txt',{encoding:'utf-8'})
// console.log(txt)

//遍历文件
// function getAllFileFromPath(path){
//     fs.readdir(path,(err,res)=>{
//         for(let statPath of res){
//             let statObj=fs.statSync(path+'/'+statPath);
//             if(statObj.isDirectory()){
//                 console.log('dir:'+statPath);
//                 getAllFileFromPath(path+'/'+statPath)
//             }else{
//                 console.log(`file:${statPath}`)
//             }
//         }
//     })
// }
// getAllFileFromPath('d:/AATemp')

//创建http服务器
// let server=http.createServer((req,res)=>{
//     res.writeHead('200',{'Content-Type':'text/plain'});
//     res.end('Hello Node');
// })
// server.on('connection',(req,res)=>{
//     console.log('connnected');
// })
// server.on('request',(req,res)=>{
//     console.log('requested')
// })
// server.listen(8080)

//静态文件服务器
// let server=http.createServer((req,res)=>{
//     let path=req.url
//     console.log(req)
//     if(path==='/'){
//         let fileList=fs.readdirSync('./');
// //         console.log(fileList)
//         res.writeHead('200',{'Content-Type':'text/plain'});
//         res.end(fileList.toString())
//     }else{
//         fs.readFile(`.${path}`,(err,data)=>{
//             if(err){
//                 res.end('Internal Error');
//                 throw err;
//             }
//             res.writeHead('200',{'Content-Type':'text/plain'});
//             res.end(data)
//         })
//     }
// })
// process.on('uncaughtException',(err)=>{
//     console.log('get Error')
// })
// server.listen(8080);
// console.log('Server Start')

//提交表单
// const server=http.createServer((req,res)=>{
//     const {method,url} = req
//     let data=[]
//     req.on('data',(chunk)=>{
//         data.push(chunk)
//     })
//     req.on('end',()=>{
//         console.log(Buffer.concat(data).toString())
//         console.log('传输结束')
//     })
//     if(url==='/login'){
//         switch(method){
//             case 'POST':
//                 console.log('post');
//                 break;
//             case 'GET' :
//                 fs.createReadStream('login.html').pipe(res);
//                 break;
//             default :
//                 console.log('other request!')
    
//         }
//     }else{
//         res.writeHead('302',{
//             'Location':'/login'
//         })
//         res.end()
//     }
// })
// server.listen(8080)
// console.log('server start')

//http客户端服务
// http.get('https://www.blockchain.com/ticker',res=>{
//     const {statusCode} = res
//     if(statusCode===200){
//         let data=[]
//         res.on('data',(chunk)=>{
//             data.push(chunk)
//         })
//         res.on('end',()=>{
//             console.log(Buffer.concat(data).toString())
//         })
//         res.on('error',err=>{
//             console.log(err)
//         })
//     }
// })

//代理服务器
// const server=http.createServer((req,res)=>{
//     let url = req.url.substring(1,req.url.length);
//     let requestProxy=http.request(url,pres=>{
//         res.writeHead(pres.statusCode,pres.headers);
//         pres.on('data',data=>{
//             res.write(data)
//         })
//         pres.on('end',()=>{
//             res.end()
//         })
//     })
//     req.on('data',data=>{
//         requestProxy.write(data)
//     })
//     req.on('end',()=>{
//         requestProxy.end();
//     })
// })
// server.listen(8080)
// console.log('server start ')

//tcp服务器
const server = net.createServer((c)=>{
    console.log('client connect')
    c.write('hello');
    c.pipe(c);
})
server.on('error',err=>{
    console.log(err)
})
server.listen(8080,()=>{
    console.log('server start')
})