// var arr = [2, 5, 1, 6, 100, 2, 6, 33, 55, 41];
var arr = [2,5,1,6,7,8,100,2,6,33,55,41];

quickSort(arr)
function quickSort(arr) {
    console.log(1)
    qSort(arr, 0, arr.length - 1);
    console.log(arr)
}

function qSort(arr, left, right) {
    if (left < right) {
        let index = part(arr, left, right);
        qSort(arr, left, index - 1);
        qSort(arr, index + 1, right);
    }
}

function part(arr, left, right) {
    let pivot = arr[left];
    let i = left + 1;
    let j = right;
    while (i < j) {
        while (arr[j] >= pivot && i < j) {
            j--;
        }
        while (arr[i] <= pivot && i < j) {
            i++
        }
        if(i < j) {
            swap(arr, i, j)
        }
    }
    swap(arr, left, i);
    return i
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



function quickSort(arr) {
    return qSort(arr, 0, arr.length - 1);
}   

function qSort(arr, left, right) {
    let index = partition(arr, left, right)
}
function partition(arr, left, right) {
    let i = left + 1;
    let j = right;
    let pivot = arr[left];
    while(i < j) {

    }

}