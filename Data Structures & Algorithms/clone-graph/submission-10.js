/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const nodeMap = new Map();
        const clone = (n) => {
            if (!n) return null;
            if (nodeMap.has(n)) return nodeMap.get(n);
            const newNode = new Node(n.val);
            nodeMap.set(n, newNode);
            for (let nei of n.neighbors) {
                const newNei = clone(nei);
                newNode.neighbors.push(newNei);
            }
            return newNode;
        };
        return clone(node);
    }
}
