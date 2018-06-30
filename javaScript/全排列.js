function Permutation(arr ,start){
    let len = arr.length;
    if(start === len - 1){
        console.log(arr);
    }
    for(let i = start; i < len; i++) {
        swap(arr, start, i);
        Permutation(arr, start + 1);
        swap(arr, start, i);
    }
}

function swap(arr, i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 但不是字典序的 



