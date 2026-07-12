/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const res = new ListNode();
        let tail = res;
        let carry = 0;
        while (l1 || l2) {
            const l1Val = l1 ? l1.val : 0;
            const l2Val = l2 ? l2.val : 0;
            const sum = l1Val + l2Val + carry;
            if ( sum > 9) {
                carry = 1; 
                tail.next = new ListNode(sum - 10);
            }
            else {
                carry = 0;
                tail.next = new ListNode(sum);
            }
            tail = tail.next
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        if (carry) tail.next = new ListNode(carry);
        return res.next;
    }
}
