const heapdump = require('heapdump')
const http = require('http');
let leakArray = [];
let leak = function () {
    leakArray.push('leak' + Math.random());
}


http.createServer((req, res) => {
    leak();
    res.end('hello leak' + leakArray.toString());

}).listen(1337, () => {
    console.log('serverun')
})
