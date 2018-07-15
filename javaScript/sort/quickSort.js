let arr = [2, 3, 5, 1, 4, 97, 124, 3, 5, 32, 1, 4, 3];



function quickSort(arr) {
    qsort(arr, 0, arr.length - 1);
}

function qsort(arr, left, right) {
    if (left < right) {
        let pivot = partition(arr, left, right);
        qsort(arr, left, pivot - 1);
        qsort(arr, pivot + 1, right)
    }
}

function partition(arr, left, right) {
    let pivot = arr[left];
 
    let i = left;
    let j = right
    while(i < j) {
        while(arr[j] >= pivot && i < j) {
            j--;
        }
        while(arr[i] <= pivot && i < j) {
            i++;
        }
        if(i < j) {
            swap(arr, i, j)
        }
    }
    swap(arr, left, i);
    return i
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
quickSort(arr)
console.log(arr);