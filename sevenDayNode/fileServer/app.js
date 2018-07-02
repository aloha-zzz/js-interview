const http = require('http');
const fs = require('fs');


function getFileInfo(arr, cb) {
    console.log(arr)
    let content = '';
    let len = arr.length;
    (function next(i){
        if(i === len){
            cb(null, content)
            return;
        }
        fs.readFile(arr[i], (err, data) =>{
            content += `filename: ${arr[i]} \n`;
            if(err) {
                console.log(err)
                content += err + '\n';
            } else {
                content += data.toString() + '\n';
            }
            next(i + 1)
        })
    })(0)
}


function parseUrl(res, url){
    console.log(url);
    if(url === '/favicon.ico'){
        return;
    }
    url = url.split('').slice(1).join('')
    getFileInfo(url.split('??'), (err, data) => {
        if(!err) {
            console.log(data)
            res.write(data);
            res.end();
        }
    });
}


http.createServer((req, res) => {
    res.writeHead(200);
    if(req.url === '/'){
        res.write('hello')
        res.end();
    }
    else if(req.url === '/test'){
        res.write('test')
        res.end()
    }
    else {
        parseUrl(res, req.url);
    }
    
}).listen(3000)


