// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点。
function FindKthToTail(head, k)
{
    // write code here
    if(head === null || k <= 0){
        return null
    }
    let temp = head;
    while( k > 0){
        if(temp === null){
            return null
        }
        temp = temp.next;
        k--;
    }

    while(temp !== null){
        temp = temp.next;
        head = head.next;
    }
    return head;
}



function Node (val){
    this.val = val;
    this.next = null
}