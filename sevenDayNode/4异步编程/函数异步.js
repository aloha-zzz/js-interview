// 串行

(function next(i, len, cb) {
    if (i < len) {
        async(arr[i], (err) => {
            if (!err) {
                console.log(`${i} success`)
                next(i + 1, len, cb)
            }
        })
    } else {
        cb()
    }
}(0, length, () => success))

// 并行
(function (i, len, count, cb) {
    for (; i < len; ++i) {
        (function (i) {
            async(arr[i], function (value) {
                arr[i] = value;
                if (++count === len) {
                    cb();
                }
            });
        }(i));
    }
}(0, arr.length, 0, function () {
    // All array items have processed.
}));