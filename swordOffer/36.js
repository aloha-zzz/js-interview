// 输入两个链表，找出它们的第一个公共结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Node(x){
    this.val = x;
    this.next = null;
}

let mid = new Node(6);
mid.next = new Node(7);

let left = new Node(1)
left.next = new Node(3)
left.next.next = new Node(5);

let right = new Node(2);
right.next = new Node(4);
left.next.next.next = mid;
right.next.next = mid;

function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    if(pHead1 === null || pHead2 === null) {
        return null
    }

    let temp = pHead2;
    while(temp.next !== null) {
        temp = temp.next;
    }
    temp.next = pHead2;
    let start1 = pHead1;
    let start2 = pHead1;
    while(start1 != start2) {
        start1 = start1.next;
        start2 = start2.next.next;
    }
    let start3 = pHead1;
    while(start1 != start3){
        start3 = start3.next;
        start1 = start1.next;
    }
    return start1
}

// 或者用hashMap 存