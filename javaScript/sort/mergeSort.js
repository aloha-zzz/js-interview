let arr = [2, 3, 5, 1, 4, 97, 124, 3, 5, 32, 1, 4, 3];

function merge(left, right){
    let ans = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            ans.push(left.shift());
        } else {
            ans.push(right.shift())
        }
    }
    return ans.concat(left, right)
}


function mergeSort(arr){
    if(arr.length === 1 || arr.length === 0 ) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr))