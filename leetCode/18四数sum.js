var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => Number(a) - Number(b));
    let len = nums.length;
    let ans = []
    for (let a = 0; a < len - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        for (let b = a + 1; b < len - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue;
            let c = b + 1;
            let d = len - 1;
            while (c < d) {
                let sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum === target) {
                    ans.push([nums[a], nums[b], nums[c], nums[d]]);
                    c++;
                    d--;
                    while (nums[c] === nums[c - 1]) c++;
                    while (nums[d] === nums[d + 1]) d--
                } else if (sum > target) {
                    d--
                } else {
                    c++
                }
            }
        }
    }
    return ans;
};