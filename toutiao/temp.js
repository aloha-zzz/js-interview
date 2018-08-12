let arr = [[1, 10], [5, 16], [16,32], [32, 45], [78, 94], [80,100], [200, 220]]


for(let i = 0; i < arr.length - 1; ) {
    if(arr[i][1] >= arr[i + 1][0]){
        arr[i] = [ arr[i][0], arr[i + 1][1] ];
        arr.splice(i + 1, 1);
    } else {
        i ++
    }
}

console.log(arr)