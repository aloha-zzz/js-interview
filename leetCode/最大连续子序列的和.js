var maxSubArray = function(nums) {
    
    let prev = nums[0];
    let max = nums[0];
    for(let i = 1, len = nums.length; i < len; i++){
        if(prev < 0){
            prev = nums[i]
        } else {
            prev += nums[i]
        }
        if(prev > max){
            max = prev
        }
    }
    return max
};
