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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        slow.next = null;
        let rev = null;
        while (second) {
            const temp = second.next;
            second.next = rev;
            rev = second;
            second = temp;
        }
        let tempHead = head;
        while(rev) {
            const nextHead = tempHead.next;
            tempHead.next = rev;
            rev = rev.next;
            tempHead.next.next = nextHead;
            tempHead = tempHead.next.next;
        }
        return head;
    }
}
