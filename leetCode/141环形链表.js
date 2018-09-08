/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var hasCycle = function(head) {
    if(head == null) {
        return false;
    }
    let one = head;
    let two = head;
    while(one.next != null && two.next != null) {
        one = one.next;
        if(one.next != null) {
            one = one.next
        } else {
            return false
        }
        two = two.next;
        if(one === two) {
            return true;
        }
    }
    return false

};