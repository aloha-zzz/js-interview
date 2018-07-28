// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
// top K
// function GetLeastNumbers_Solution(input, k) {
//     // write code here
//     if(k > input.length) {
//         return []
//     }

//     let arr = input.sort((a, b) => {
//         if (a > b) {
//             return 1
//         } else {
//             return -1
//         }
//     })
//     return arr.slice(0, k)

// }



// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(input, k) {
    // write code here

    if(input.length < k){
        return []
    }

    let arr = input.slice(0, k);
    let heapSize = k;
    for (let i = k >> 1; i >= 0; i--) {
        heapify(arr, i, heapSize);
    }

    //往最大堆比较
    for (let i = k; i < input.length; i++) {
        if (arr[0] > input[i]) {
            arr[0] = input[i];
            heapify(arr, 0, heapSize);
        }
    }
    return arr.sort((a, b) => a - b)
}


function heapify(arr, i, length) {
    let largest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    if (arr[largest] < arr[left] && left < length) {
        largest = left;
    }

    if (arr[largest] < arr[right] && right < length) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest, length)
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}