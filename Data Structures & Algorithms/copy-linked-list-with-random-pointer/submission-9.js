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
        const nodeMapping = new Map();
        let resHead = new Node();
        let tail = resHead;
        let temp = head;
        while (temp) {
            const newNode = new Node(temp.val);
            nodeMapping.set(temp, newNode);
            temp = temp.next;
            tail.next = newNode;
            tail = newNode;
        }
        for (const [oldN, newN] of nodeMapping) {
            newN.random = nodeMapping.get(oldN.random);
        }
        return resHead.next;
    }
}
