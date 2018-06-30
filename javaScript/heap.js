class MinHeap {
    constructor() {
        this.arr = []
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.arr.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.arr.length;
    }

    leftChild(parentIndex) {
        return this.arr[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        return this.arr[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.arr[this.getParentIndex(childIndex)];
    }

    swap(i, j){
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    peek() {
        if(this.arr.length === 0) {
            return null;
        }
        return this.arr[0];
    }


    heapifyUp(index) {
        let index = index || this.arr.length - 1;
        let temp = null;
        while(this.hasParent(index) && this.arr[index] < this.parent(index)){
            
        }


    }




}




function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}