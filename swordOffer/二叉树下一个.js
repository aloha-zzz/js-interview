

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
    // write code here
    if (pNode == null) return null

    if (pNode.right) {
        let temp = pNode.right;
        while(temp.left !== null) {
            temp = temp.left;
        }
        return temp;
    }

    while (pNode.next) {
        if(pNode.next.left === pNode) return pNode.next // 如果是右边的父节点,  
        pNode = pNode.next; // 
    }

    return null

}