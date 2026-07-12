// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
        const nodeMap = new Map();
        let temp = head;
        while (temp) {
            const newNode = new Node(temp.val);
            nodeMap.set(temp, newNode);
            temp = temp.next;
        }
        temp = head;
        while (temp) {
            const newNode = nodeMap.get(temp);
            newNode.next = temp.next ? nodeMap.get(temp.next) : null;
            newNode.random = temp.random ? nodeMap.get(temp.random) : null;
            temp = temp.next;
        }
        return nodeMap.get(head);
    }
}
