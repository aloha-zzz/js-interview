let arr = [2, 3, 5, 1, 4, 97, 124, 3, 5, 32, 1, 4, 3];


function insertSort(arr) {
    for (let i = 1, len = arr.length; i < len; i++) {
        let num = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > num) {
            swap(arr, j, j + 1);
            j--;
        }
        arr[j + 1] = num;
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

insertSort(arr);
console.log(arr)