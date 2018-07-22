let arr = [2, 3, 5, 1, 4, 97, 124, 3, 5, 32, 1, 4, 3];

function selectSort(arr){
    for(let i = 0,len = arr.length; i < len; i++){
        let min = i;
        for(let j = i + 1, len = arr.length; j < len; j++){
            if(arr[min] > arr[j]) {
                min = j
            }
        }
        swap(arr, i, min)
    }
}


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

selectSort(arr);
console.log(arr)