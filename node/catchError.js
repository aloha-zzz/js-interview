process.on('uncaughtException', (e) => {
    console.log('i get')
    console.error(e)
})

const fs = require('fs')
try {
    fs.readFile('./tcp.js', (err, result) => {
        if (!err) {
            console.log('i get tcp')
        }
        fs.readFile('./event.js', (err, result) => {
            if (!err) {
                console.log('i get event')
            }
            throw new Error('error')
        })
    })
} catch (e) {
    console.log('i find error', e)
}
// try catch 不能捕获深层次异常