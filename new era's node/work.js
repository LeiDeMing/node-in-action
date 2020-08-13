/*
 * @Author: your name
 * @Date: 2020-08-13 10:59:31
 * @LastEditTime: 2020-08-13 11:04:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-in-action\new era's node\work.js
 */
const child_process = require('child_process')
const begin = process.argv[2]
process.on('message', msg => {
    console.log('from parent:', msg)
    process.exit()
})
process.send({
    hello: 'parent'
})