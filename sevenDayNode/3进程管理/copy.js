const child_process = require('child_process');
const util = require('util');

function copy(source, target, cb) {
    child_process.exec(
        `cp -r ${source} ${target}`,cb
    )
}

function main(argv) {
    copy(argv[0], argv[1], (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    })
}

main(process.argv.slice(2))

// cluster模块是对child_process模块的进一步封装
// ，专用于解决单进程NodeJS Web服务器无法充分利用多核CPU的问题。
// 使用该模块可以简化多进程服务器程序的开发，让每个核上运行一个工作进程，并统一通过主进程监听端口和分发请求。