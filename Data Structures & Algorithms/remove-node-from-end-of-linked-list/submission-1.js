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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp = head;
        let len = 0;
        while (temp) {
            len++;
            temp = temp.next;
        }
        const traverseLen = len - n;
        let count = 0;
        let tempHead = new ListNode();
        tempHead.next = head;
        temp = tempHead;
        while (count < traverseLen) {
            temp = temp.next;
            count++;
        }
        temp.next = temp.next.next;
        return tempHead.next;
    }
}
