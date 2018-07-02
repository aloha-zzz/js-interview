
console.log('child run')


process.on('message', function (msg) {
    console.log('child ', msg)
    msg.hello = msg.hello.toUpperCase();
    process.send(msg);
});