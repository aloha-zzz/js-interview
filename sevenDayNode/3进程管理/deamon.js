// 守护进程

const child_process = require('child_process')

function spawn(mainModule) {
    var worker = child_process.exec(`node ${mainModule}`);
    worker.on('exit', function (code) {
        if (code !== 0) {
            spawn(mainModule);
        }
    });
    worker.stdout.on('data', function (data) { // 用于输出子进程的 内容
        console.log(data);
    });
}

spawn('wrong.js');
