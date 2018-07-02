// process.on('uncaughtException', function (err) {
//     console.log('Error: %s', err.message);
// });

// setTimeout(function (fn) {
//     fn();
// });

function async(request, callback) {
    // Do something.
    asyncA(request, function (data) {
        // Do something
        asyncB(request, function (data) {
            // Do something
            asyncC(request, function (data) {
                // Do something
                callback(data);
            });
        });
    });
}
// 在NodeJS官方文档里都强烈建议处理完异常后立即重启程序，
// 而不是让程序继续运行。按照官方文档的说法，发生异常后的程序处于一个不确定的运行状态
// ，如果不立即退出的话，程序可能会发生严重内存泄漏，也可能表现得很奇怪。
http.createServer(function (request, response) {
    var d = domain.create();

    d.on('error', function () {
        response.writeHead(500);
        response.end();
    });

    d.run(function () {
        async(request, function (data) {
            response.writeHead(200);
            response.end(data);
        });
    });
});