let begin=process.argv[2];
console.log("I'm worker "+begin);
process.on('message',(msg)=>{
    console.log('from parent: '+msg);
    // process.exit()
})
process.send({hello:'parent'})