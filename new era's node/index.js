/*
 * @Author: your name
 * @Date: 2020-08-12 14:57:34
 * @LastEditTime: 2020-08-13 11:17:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-in-action\new era's node\index.js
 */
const fs = require('fs')
const http = require('http');
const path = require('path');
const formidable = require('formidable')
const url = require('url')
const net = require('net')
const stream = require('stream')
const readline = require('readline')
const util = require('util')
const child_process = require('child_process')
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

//代理
// const server = http.createServer((req, res) => {
//     const url = req.url.substring(1, req.url.length)
//     const proxyRequest = http.request(url, pres => {
//         res.writeHead(pres.statusCode, pres.headers)
//         pres.on('data', data => {
//             res.write(data)
//         })
//         pres.on('end', () => {
//             res.end()
//         })
//     })
//     req.on('data', data => {
//         proxyRequest.write(data)
//     })
//     req.on('end', () => {
//         proxyRequest.end()
//     })
// })
// server.listen(3389)

// const server = net.createServer(c => {
//     console.log('client connected')
//     c.on('end', () => {
//         console.log('client disconnected')
//     })
//     c.write('Hello')
//     c.pipe(c)
// })
// server.on('error', err => {
//     err
// })
// server.listen(3389, () => {
//     console.log('server start')
// })

// const client = net.connect({port:3389},()=>{
//     console.log('client to connect server')
// })
// client.on('data',data=>{
//     console.log(data.toString())
// })
// client.on('end',()=>{
//     console.log('disconnect from server')
// })

// const readStream = fs.createReadStream(path.resolve(__dirname) + '/demo.txt', 'utf8')
// readStream.on('data', data => {
//     console.log(data)
// })
// readStream.on('close', () => {
//     console.log('close')
// })
// readStream.on('error', err => {
//     throw err
// })

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         const fileList = fs.readdirSync('./')
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         })
//         res.end(fileList.toString())
//     } else {
//         const path = './' + req.url
//         const idDir = fs.statSync('.' + req.url)
//         let readStream
//         if (idDir.isDirectory())
//             readStream = fs.createReadStream(path).pipe(res)
//     }
// })
// server.listen(3389)

// const rl = readline.createInterface({
//     input: fs.createReadStream(path.resolve(__dirname) + '/demo.txt')
// })
// rl.on('line', data => {
//     console.log(data)
// })
// rl.on('close', () => {
//     console.log('close')
// })

// const Readable = require('stream').Readable
// util.inherits(MyReadable, Readable)

// function MyReadable(array) {
//     Readable.call(this, {
//         objectMode: true
//     })
//     this.array = array
// }
// MyReadable.prototype._read = function () {
//     if (this.array.length) {
//         this.push(this.array.shift())
//     } else {
//         this.push(null)
//     }
// }

// const array = ['A', 'B', 'C', 'D', 'E']
// const read = new MyReadable(array)

// read.on('data', data => {
//     console.log(data)
// })
// read.on('end', () => {
//     console.log('end')
// })

// const ls = child_process.spawn('powershell', ['dir'])
// ls.stdout.on('data', data => {
//     console.log(data.toString())
// })

// const worker = child_process.fork(path.resolve(__dirname) + '/work.js', ['args1'])
// worker.on('exit', () => {
//     console.log('fork exit')
// })
// worker.send('I\'m fork')
// worker.on('message', msg => {
//     console.log(msg)
// })