// 输入一个链表，从尾到头打印链表每个节点的值。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    let arr =[];
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr.reverse()
}