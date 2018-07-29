const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});



const mergePromise = ajaxArray => {
    const ans = [];
    const len = ajaxArray.length;
    return new Promise((resolve, reject) => {
        (function next(i) {
            if (i === len) {
                resolve(ans);
            } else {
                ajaxArray[i]().then((data) => {
                    ans.push(data);
                    next(i + 1);
                }, (err) => {
                    reject(err);
                })
            }
        })(0);
    })
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});