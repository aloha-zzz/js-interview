var twoSum = function (nums, target) {
    let targetArr = [];
    nums.forEach(item => {
        targetArr.push(target - item);
    })
    let ans;
    targetArr.forEach((item, index) => {
        nums.forEach((num, ite) => {
            if (ite !== index && item === num) {
                ans = [index, ite];
                return
            }
        })
    })
    return ans
};