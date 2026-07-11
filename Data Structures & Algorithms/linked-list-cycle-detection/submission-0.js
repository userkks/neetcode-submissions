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
     * @return {boolean}
     */
    hasCycle(head) {
        const set = new Set();
        while (head) {
            if (set.has(head)) return true;
            set.add(head);
            head = head.next;
        }
        return false;
    }
}
