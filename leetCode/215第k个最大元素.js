var findKthLargest = function (nums, k) {
    debugger
    return part(nums, k, 0, nums.length - 1);
};


function part(arr, target, left, right) {
    let temp = arr[left];
    let i = left ;
    let r = right;

    while (i < r) {
        while (arr[r] >= temp && i < r) {
            r--;
        }
        while (arr[i] <= temp && i < r) {
            i++;
        }
        if (i < r) {
            swap(arr, i, r)
        }
    }

    swap(arr , left, i)
    if (right - i == target - 1) { // 恰好 i 就是 第k 大
        return arr[i];
    } else if (right - i > target - 1) { // 
        return part(arr, target, i + 1, right);
    } else {
        return part(arr, target - (right - i + 1), left, i - 1)
    }

}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr = [3,2,3,1,2,4,5,5,6]
var k = 4
findKthLargest(arr, k)