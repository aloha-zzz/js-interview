function sleep (timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(timeout)
        }, timeout);
    })
}
 // 试试async 在外面整个函数return 一个值

function run(gen) {
    const it = gen();
    function go(result) {
        if(result.done) return result.value

        return result.value.then(val => go(it.next(val)))
                            .catch(err => go(it.throw(err)))
    }

    go(it.next())
}

function *g(){
    console.log(1)
    let a = yield sleep(200);
    console.log(a)
    console.log(2);
    let b = yield sleep(100)
    console.log(b)
    console.log(3)
}

function test(){
    
}