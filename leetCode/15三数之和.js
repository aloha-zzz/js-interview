var threeSum = function (nums) {
    nums = nums.sort((a, b) => Number(a) - Number(b));
    let ans = [];
    let len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let k = len - 1;
        let j = i + 1;
        while (j < k) {
            if (nums[i] + nums[k] + nums[j] === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                k--;
                j++;
                while (nums[j] === nums[j - 1]) {
                    j++
                }
                while (nums[k] === nums[k + 1]) {
                    k--
                }
            } else if (nums[i] + nums[k] + nums[j] > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return [...new Set(ans)]
};