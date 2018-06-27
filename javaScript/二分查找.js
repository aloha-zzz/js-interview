function BinarySearch(arr, item) { // arr 是排序好的
    let left = 0; 
    let right = arr.length - 1;
    let mid = -1

    while(left <= right) {
        mid = Math.floor(left + right / 2);
        if(arr[mid] === item) {
            return mid;
        } else if(arr[mid] < item) {
            left = mid - 1;
        } else if(arr[mid] > item) {
            right = mid + 1;
        }  
    }
    return  -1
}


