function say(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

let arr = [4000, 200, 4000];

(function next(i, arr) {
    if(i === arr.length){
        return;
    }
    say(arr[i]).then(data=>{
        console.log(data);
        next(i + 1, arr)
    })
})(0, arr)

