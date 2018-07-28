var arr = [2,5,1,6,7,8,100,2,6,33,55,41];

function merge(left, right){
    let ans = [];
    while(left.length > 0 && right.length > 0 ) {
        if(left[0] < right[0]){
            ans.push(left.shift());
        } else {
            ans.push(right.shift())
        }
    }
    return ans.concat(left, right);
}

function mergeSort(arr) {
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort(arr))
