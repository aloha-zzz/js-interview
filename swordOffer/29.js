// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
// top K
function GetLeastNumbers_Solution(input, k) {
    // write code here
    if(k > input.length) {
        return []
    }

    let arr = input.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    return arr.slice(0, k)

}



// function heapify(arr) {
//     let heapSize = arr.length;
//     for(let i = Math.floor(heapSize / 2) - 1; i > 0; i--) {
//         let left = 2 * i + 1;
//         let right = 2 * i + 2;

//     }
// }