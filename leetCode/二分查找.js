var search = function(nums, target) {
    // nums 有序
    let i = 0;
    let j = nums.length - 1;
    console.log(j)
    while(i <= j) {
        
        let mid = (i + j) >> 1;
        if(nums[mid] === target) {
            return mid;
        } 
        else if ( nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid - 1
        }
    }

    return -1
};

console.log(search([-1,0,3,5,9,12], 9))