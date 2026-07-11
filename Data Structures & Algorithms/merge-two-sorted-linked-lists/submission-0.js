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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const head = new ListNode();
        let temp = head;
        while(list1 && list2) {
            if (list1.val < list2.val) {
                temp.next = list1;
                temp = temp.next;
                list1 = list1.next;
            } else {
                temp.next = list2;
                temp = temp.next
                list2 = list2.next;
            }
        }
        if (list1) {
            temp.next = list1;
        }
        if (list2) {
            temp.next = list2;
        }
        return head.next;

    }
}
