/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *         this.val = val;
 *         this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const nodeMap = new Map();
        const queue = [node];

        // Clone the starting node
        nodeMap.set(node, new Node(node.val));

        while (queue.length) {
            const curr = queue.shift();
            const clone = nodeMap.get(curr);

            for (const neighbor of curr.neighbors) {
                if (!nodeMap.has(neighbor)) {
                    nodeMap.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor);
                }

                clone.neighbors.push(nodeMap.get(neighbor));
            }
        }

        return nodeMap.get(node);
    }
}