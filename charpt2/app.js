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

// const fs=require('fs')
// let txt=fs.readFileSync('../shi.txt',{encoding:'utf-8'})
// console.log(txt)

//遍历文件
// const fs=require('fs')

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
// let http=require('http')
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
// const http=require('http')
// const fs=require('fs')
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