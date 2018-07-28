
var arr = [2,5,1,6,7,8,100,2,6,33,55,41];
// 最大堆 ，从小到大拍

function heapSort(arr){
    let heapSize = arr.length;
    for(let i = heapSize >> 1 ; i >= 0; i--) {// 先建堆
        heapify(arr, i, heapSize);
    } 

    for(let j = heapSize - 1; j >= 1; j--){
        swap(arr, 0, j);
        heapify(arr, 0, --heapSize)
    }
    console.log(arr)
}

function heapify(arr, i, size){
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    if(arr[largest] < arr[left] && left < size){
        largest = left; 
    }
    if(arr[largest] < arr[right] && right < size) {
        largest = right;
    }
    if(largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest, size);
    } 
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
heapSort(arr)