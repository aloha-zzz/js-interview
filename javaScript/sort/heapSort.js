let arr = [2, 3, 5, 1, 4, 97, 124, 3, 5, 32, 1, 4, 3];

// 最大堆 从小到大排

function heapSort(arr) {
    let heapSize = arr.length;
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapify(arr, i, heapSize)
    }
    for (let i = heapSize - 1; i > 0; i--) {
        swap(arr, i, 0);
        heapify(arr, 0, --heapSize)
    }
    return arr
}

function heapify(arr, index, len) { // 建堆
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let max = index;
    if (left < len && arr[left] > arr[max]) {
        max = left;
    }
    if (right < len && arr[right] > arr[max]) {
        max = right;
    }
    if (max !== index) {
        swap(arr, index, max);
        heapify(arr, max, len)
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
heapSort(arr);