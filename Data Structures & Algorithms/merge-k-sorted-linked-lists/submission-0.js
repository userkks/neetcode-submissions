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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let head = new ListNode();
        let tail = head;
        while (true) {
            let low = Number.POSITIVE_INFINITY;
            let nodeAdded;
            for (let i=0; i<lists.length; i++) {
                const list = lists[i];
                if (!list) continue;
                if (list.val < low) {
                    low = list.val;
                    nodeAdded = i;
                }
            }
            if (nodeAdded !== undefined) {
                const temp = lists[nodeAdded];
                lists[nodeAdded] = temp.next;
                tail.next = temp;
                tail = temp;
            } else {
                return head.next;
            }
         }
    }
}
