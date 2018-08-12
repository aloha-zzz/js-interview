let line = readline();
let readArr = [];
for (let i = 0; i < line; i++) {
    let temp = readline().split(';')
    readArr.push(...temp);
}
let arr = [];
readArr.forEach(item => {
    let temp = item.split(',')
    temp = temp.map(item => Number(item));
    arr.push(temp);
})

arr.sort((a, b) => {
    return a[0] - b[0]
})
let len = arr.length;
for (let i = 0; i < len - 1;) {
    if (arr[i][1] >= (arr[i + 1][0])) {
        let last = (arr[i][1]) > (arr[i + 1][1]) ? arr[i][1] : arr[i + 1][1]
        arr[i] = [arr[i][0], last];
        arr.splice(i + 1, 1);
        len --;
    } else {
        i++;
    }
}

print(arr.join(';'))


