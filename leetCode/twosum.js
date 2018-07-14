const twoSum = function (nums, target) {
    const map = {};
    nums.forEach((item, index) => {
        map[target - item] = index;
    })
    let ans = []
    nums.forEach((item,index) => {
        if(map[item] !== undefined && index !== map[item]){
            ans = [map[item], index];
            return
        }
    })
    return ans
};
