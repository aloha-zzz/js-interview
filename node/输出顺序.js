
// const fs = require('fs');

// fs.readFile('./tcp.js', (err, callback) => {
//     console.log(callback.toString())
//     setImmediate(() => {
//         console.log('setImmediate inner');
//     })
//     setTimeout(() => {
//         console.log('setTimeout inner')
//     })
// })


setImmediate(() => {
    console.log('setImmediate outer');
})
setTimeout(() => {
    console.log('setTimeout outer')
})

// 1.输出顺序 
// CSRF 
// 守护进程 
// CA 