var lengthOfLIS = function (nums) {
    if (nums.length == 0) return 0
    let Len = nums.length;
    let arr = new Array(Len).fill(1);

    debugger
    for (let a = 0; a < Len; a++) {
        for (let i = 0; i < a; i++) {
            if (nums[i] < nums[a]) {
                arr[a] = Math.max(arr[a], arr[i] + 1);
            }
        }
    }

    return Math.max.apply(null, arr);
};

var nums = [10, 9, 2, 5, 3, 7, 101, 18]
lengthOfLIS(nums)