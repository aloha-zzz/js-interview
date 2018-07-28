var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1]
        }
        
    }
    let ans = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            ans.push(i + 1)
        }
    }
    return ans;
};

//通过正负来判断