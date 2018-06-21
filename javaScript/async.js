function timeout(content, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(content);
            resolve()
        }, timeout)
    })
}

async function run() {
    await console.log(timeout(2123, 1000));
    console.log(22)
}
run()
console.log(3)