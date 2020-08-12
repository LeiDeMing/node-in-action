/*
 * @Author: your name
 * @Date: 2020-08-12 14:57:34
 * @LastEditTime: 2020-08-12 17:51:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-in-action\new era's node\index.js
 */
const fs = require('fs')
const http = require('http');
const path = require('path');
const formidable = require('formidable')
const txtName = './new era\'s node/demo.txt'

//  fs.readFile(txtName,'utf8',(err,res)=>{
//     console.log(res)
//  })

// fs.writeFile(txtName,'code write',err=>{
//     console.log(err)
// })

// fs.stat(txtName, (err, stats) => {
//     console.log(stats)
//     console.log('stat')
// })

// fs.open(txtName, 'r', (err, fd) => {
//     console.log(fd)
// })

// function getAllDirName(path) {
//     fs.readdir(path, (err, files) => {
//         for (dir of files) {
//             let isDir = fs.statSync(path + '/' + dir).isDirectory()
//             if (isDir){
//                 console.log(dir)
//                 getAllDirName(path + '/' + dir)
//             }
//         }
//     })
// }
// getAllDirName('./')

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     })
//     res.end('Hello Node')
// }).listen(3389)


// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     })
//     res.end('Hello Node')
// })
// server.on('connection', (req, res) => {
//     console.log('connection')
// })
// server.on('request', (req, res) => {
//     console.log('request')
// })
// server.listen(3389)

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         const fileList = fs.readdirSync('./')
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         })
//         res.end(fileList.toString())
//     } else {
//         const path = req.url
//         fs.readFile('.' + path, 'utf8', (err, data) => {
//             if (err) {
//                 res.end('Internal Error')
//                 return
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/plain;charset=utf-8'
//             })
//             res.end(data)
//         })
//     }
//     console.log(req.headers)
// })
// server.listen(3389)

// const server = http.createServer((req, res) => {
//     if (req.url === '/login') {
//         switch (req.method) {
//             case 'GET':
//                 fs.createReadStream(path.resolve(__dirname) + '/views/login.html').pipe(res);
//                 break;
//             case 'POST':
//                 let body = []
//                 req.on('data', (err, chunk) => {
//                     console.log(chunk)
//                     body.push(chunk)
//                 }).on('end', () => {
//                     body = Buffer.concat(body).toString()
//                 })
//                 console.log(body)
//                 break;
//             default:
//                 console.log('其他类型')
//         }
//     } else {
//         res.writeHead(302, {
//             'Location': '/login'
//         })
//         res.end()
//     }
// })

// server.listen(3389)

// const server = http.createServer((req, res) => {
//     if (req.url === '/upload') {
//         switch (req.method) {
//             case 'GET':
//                 fs.createReadStream(path.resolve(__dirname) + '/views/upload.html').pipe(res)
//                 break;
//             case 'POST':
//                 dealUplaodFile(req, res)
//                 break;
//             default:
//                 console.log('其他方式')
//                 break;
//         }
//     } else {
//         res.writeHead(302, {
//             'Location': '/upload'
//         })
//         res.end()
//     }
// })

// function dealUplaodFile(req, res) {
//     const form = new formidable.IncomingForm()
//     form.keepExtensions = true
//     form.uploadDir = __dirname
//     form.parse(req, (err, fildes, files) => {
//         if (err) throw err
//         console.log(files)
//     })
// }
// server.listen(3389)