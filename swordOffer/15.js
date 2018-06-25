// 输入一个链表，反转链表后，输出新链表的表头。

function ReverseList(pHead)
{
    // write code here
    if (pHead === null) {
        return null;
    } else {
        let prev = null;
        while(pHead !== null){
            let next = pHead.next;
            pHead.next = prev;
            prev = pHead;
            pHead = next;
        }
        return prev
    }
}