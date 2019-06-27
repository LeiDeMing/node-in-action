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

const fs=require('fs')

function getAllFileFromPath(path){
    fs.readdir(path,(err,res)=>{
        for(let statPath of res){
            let statObj=fs.statSync(path+'/'+statPath);
            if(statObj.isDirectory()){
                console.log('dir:'+statPath);
                getAllFileFromPath(path+'/'+statPath)
            }else{
                console.log(`file:${statPath}`)
            }
        }
    })
}
getAllFileFromPath('d:/AATemp')