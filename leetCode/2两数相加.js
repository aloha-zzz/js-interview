/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

l1 = new Node(1);
l1.next = new Node(0);
l1.next.next = new Node(0);
l1.next.next.next = new Node(0);
l1.next.next.next.next = new Node(0);
l1.next.next.next.next.next = new Node(1);



l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

var addTwoNumbers = function (l1, l2) {
    let str1 = '';
    let str2 = '';
    while(l1 != null) {
        str1 += l1.val.toString();
        l1 = l1.next;
    }
    while(l2 != null) {
        str2 += l2.val.toString();
        l2 = l2.next
    }

    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');
    let ans = (Number(str1) + Number(str2)).toString();
    let head = null
    for(let i = 0; i < ans.length; i++) {
        if(i === 0) {
            head = new ListNode(Number(ans[i]))
        } else {
            let temp = head;
            head = new ListNode(Number(ans[i]));
            head.next = temp;
        }
    }
    return head
    
};
