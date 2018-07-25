const net = require('net')



let server = net.createServer(function(socket){
    console.log(socket);
    socket.on('data', function(data){
        socket.write('hello');
    })
    socket.on('end', function(){
        console.log('连接断开');
    })
    socket.write('welcome')
}).listen(8124, () => {
    console.log('server')
})

