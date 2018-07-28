function Sort(){
    var arr = [2,5,1,6,7,8,100,2,6,33,55,41];
    this.bubbleSort = function(){
        let len = arr.length;
        for(let i = 0; i < len; i++) {
            let bool = true;
            for(let j = 0; j < len - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    bool = false;
                    swap(arr, j, j + 1);
                }
            }
            if(bool) {
                break;
            }
        }
        console.log(arr)
    }

    this.quickSort = function() {
        qsort(arr, 0, arr.length - 1) 
    }


    function qsort(arr, left, right) {
        if(left < right) {
            let index = part(arr, left, right);
            qsort(arr, left, index - 1);
            qsort(arr, index + 1, right);
        }
    }

    function part(arr, left, right){
     
        let pivot = arr[left];
        let i = left + 1;
        let j = right;
        while(i < j) {
            while(arr[j] >= pivot && i < j) {
                j--;
            }
            while(arr[i] <= pivot && i < j){
                i++;
            }
            if(i < j) {
                swap(arr, i, j);
            }
        }
        swap(arr, left, i);
        return i
    }

    this.output = function (){
        console.log(arr)
    }


     function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

let sort = new Sort();
// sort.bubbleSort();
sort.quickSort()
sort.output()