function sleep (timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(timeout)
        }, timeout);
    })
}

let arr = [sleep(200), sleep(300), sleep(400)]

const func = async () => {
    for(let i = 0, len = arr.length; i < len; i++) {
        await arr[i]
        
    }  
}
/**
 * 1. generator 语法糖 内置执行器
 * 2. 语义好
 * 3. co模块 yield后要是 promise或thunk. 而await可以是具体的值
 * 4. 函数最后返回是promise(感觉是缺点）
 * 
 * 
 * await 后面是一个promise对象 如果不是Promise.resolve()
 * 如果await 后面的Promise reject 会中断执行。
 * 解决办法 1. try catch
 *         2. 对可能产生的reject 后面添加.catch
 * 
 * await 实现原理 co( generator)
 */
