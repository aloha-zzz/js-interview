const zlib = require('zlib')
const http = require('http');

http.createServer((req, res) => {
    let i = 1024;
    let data = '';

    while (i--) {
        data += '.'
    }

    if((req.headers['accept-encoding']).indexOf('gzip') > -1) {
        zlib.gzip(data, (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Encoding': 'gzip'
            });
            res.end(data);
        })
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
    }
}).listen(80)