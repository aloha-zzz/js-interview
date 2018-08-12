let [n, m, k] = readline().split(' ')


let str = '';
for(let i = 0; i < n; i ++) {
    str += 'a';
}
for(let j = 0; j < m; j++) {
    str += 'z';
}
let ans = [];
Permutation(str.split(''));
print(ans[k - 1].join(''))

function Permutation(arr){
    arr.sort();
    while(1) {
        ans.push(arr)
        let len = arr.length;
        let index = -1;
        let j = null
        for(let i = len - 2; i >= 0; i--) {
            if(arr[i] < arr[i + 1]){
                index = i;
                break;
            } else if(i === 0){
                return;
            }
        }
        for(j = len - 1; j >= 0 ;j--) {
            if(arr[j] > arr[index]){
                break;
            }
        }
        swap(arr, j, index);
        Reverse(arr, index + 1) // 

    }
}

function Reverse(arr,left){
    let right = arr.length - 1;
    while(left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }

}

function swap(arr, i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
