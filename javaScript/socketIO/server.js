const http = require('http');
const io = require('socket.io');

const server = http.createServer((req, res) => {
    res.sendFile(__dirname + '/index.html')
    res.end()
}).listen(3000)


var socket = io.listen(server);

socket.on('connection', function(client){
    //连接成功则执行下面的监听
    client.on('message',function(event){
        console.log('Received message from client!',event);
    });
    //断开连接callback
    client.on('disconnect',function(){
        console.log('Server has disconnected');
    });
});