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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const reversK = (node, count) => {
            let c = 0;
            let tempHead = null;
            let tempTail;
            while (c < count && node) {
                if (c === 0) tempTail = node;
                const temp = node.next;
                node.next = tempHead;
                tempHead = node;
                node = temp;
                c++;
            }
            return [tempHead, tempTail, node, c < count];
        };
        let curHead = head;
        const mainHead = new ListNode();
        let tempTail = mainHead;
        while (curHead) {
            const [revHead, revTail, next, notFull] = reversK(curHead, k);
            curHead = next;
            if (notFull) {
                const [h, t, n] = reversK(revHead, k);
                tempTail.next = h;
            } else {
                tempTail.next = revHead;
                tempTail = revTail;
            }
        }
        return mainHead.next;
    }
}
