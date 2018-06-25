// 输入两个单调递增的链表，输出两个链表合成后的链表，
// 当然我们需要合成后的链表满足单调不减规则。

function Merge(pHead1, pHead2) // 注意有递归方法
{
    let head = null;
    if (pHead1 === null) {
        return pHead2;
    }
    if (pHead2 === null) {
        return pHead1
    }

    if (pHead1.val < pHead2.val) {
        head = pHead1;
        pHead1 = pHead1.next;
    } else {
        head = pHead2;
        pHead2 = pHead2.next
    }

    
    let temp = head;
    
    while (pHead1 !== null && pHead2 !== null) {
        if (pHead1.val < pHead2.val) {
            temp.next = pHead1;
            temp = temp.next;
            pHead1 = pHead1.next
        } else {
            temp.next = pHead2;
            temp = temp.next;
            pHead2 = pHead2.next
        }
    }
    if (pHead1) {
        temp.next = pHead1
    } else if (pHead2) {
        temp.next = pHead2
    }
    return head;
}   

