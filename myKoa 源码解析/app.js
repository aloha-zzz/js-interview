const http = require('http');

http.createServer((req, res) => {
    res.write('hello');
    res.end();
}).listen(3000, () => {
    console.log('server run')
})

 // 核心是koa-compose dispatch