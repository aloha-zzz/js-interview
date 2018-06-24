// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
//  例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 
//  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。


// 逻辑没有错误，但是样例没过
function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length === 0){
        return 0 
    } else {
        let start = 0;
        let end = rotateArray.length - 1;
        let ans = findMin(rotateArray, start, end);
        return ans;
    }
}

function findMin(arr, start, end) {
    if(start === end) {
        return arr[start]
    } else if(end - start === 1) {
        return arr[start] > arr[end] ? arr[end] : arr[start];
    } else {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[start]){ // 左半单调增
            if(arr[start] < arr[end]){
                return arr[start]
            } else {
                start = mid + 1;
                return findMin(arr, start, end);
            }
        } else { // 右半单调增
            if(arr[mid] > arr[mid - 1]){
                end = mid - 1;
                return findMin(arr, start, end)
            } else {
                return arr[mid]
            }
        }
    }
}

