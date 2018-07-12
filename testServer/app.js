const http = require('http');



http.createServer((req, res) => {
    res.write('test');
    res.end();

    
}).listen(3000, () => {
    console.log('server start')
})