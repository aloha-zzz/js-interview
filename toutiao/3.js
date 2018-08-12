let num = readline();
let a = readline().split(' ');
let b = readline().split(' ');
a = a.map(item => Number(item));
b = b.map(item => Number(item));

let mapA = {};
let mapB = {}
a.forEach(item => {
    if (mapA[item]) {
        mapA[item]++
    } else {
        mapA[item] = 1
    }
})

b.forEach(item => {
    if (mapB[item]) {
        mapB[item]++
    } else {
        mapB[item] = 1
    }
})

let A = Object.entries(mapA).sort((a, b) => a[0] - b[0]);
let B = Object.entries(mapB).sort((a, b) => a[0] - b[0]);
let ans = 0
for(let i = 0; i < num; i++) {
    let temp = A[i][0]
    ans += calc(getNum(temp, A, 'small')) * calc(temp, B, 'big');
}
print(ans)

function getNum(num, arr, type) {
    let sum = 0
    if(type === 'big'){
        for(let i = 0, len = arr.length; i < len; i ++) {
            if(arr[i][0] >= num) {
                sum += arr[i][1]
            }
        }
    } else {
        for(let i = 0, len = arr.length; i < len; i ++) {
            if(arr[i][0] <= num) {
                sum += arr[i][1]
            }
        }
    }
    return sum
}

function calc(num) {
    
    return num * (num - 1) / 2
}