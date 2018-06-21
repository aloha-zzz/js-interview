let arr = [2, 3, 5, 1, 4, 97, 124, 3, 5, 32, 1, 4, 3];

function bubbleSort(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0, len = arr.length; j < len - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }   
        }
    }
}


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

bubbleSort(arr);
console.log(arr)