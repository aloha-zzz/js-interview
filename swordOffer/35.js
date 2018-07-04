// 在数组中的两个数字，如果前面一个数字大于后面的数字，
// 则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。
// 并将P对1000000007取模的结果输出。 即输出P%1000000007


// 递归时间不行·
let num = 0;

function InversePairs(data)
{
    // write code here
    if( data.length < 2){
        return 0;
    }
    split(data)  
    console.log(num % 1000000007);
}
function merge(left, right){
    let ans = [];
    while(left.length && right.length){
        if(left[left.length - 1] > right[right.length - 1]){
            ans.unshift(left.pop())
            num += right.length
        } else {
            ans.unshift(right.pop())
        }
    }
    return left.concat(right, ans);
}


function split(arr){
    if(arr.length === 1 || arr.length === 0) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(split(left), split(right))
}

