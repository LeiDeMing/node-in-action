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

const fs=require('fs')
let txt=fs.readFileSync('../shi.txt',{encoding:'utf-8'})
console.log(txt)