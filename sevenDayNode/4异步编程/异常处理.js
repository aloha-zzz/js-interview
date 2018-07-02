// js  try catch 异常处理只能用于同步。

function sync(fn){
    return fn();
}

function async(fn, cb){
    setTimeout(() => {
        try {
            cb(fn());
        } catch (err) {
            cb('ErrorMsg:' + err)
        }
    })
}


try {
    async(null, (data) =>{
        console.log(data)
    })
 
    // Do something.
} catch (err) {
    console.log('Error: %s', err.message);
}