/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const compareTree = (node1, node2) => {
            if (!node1 && !node2) return true;
            if (!node1 || !node2 || node1.val !== node2.val) return false;
            return compareTree(node1.left, node2.left) && compareTree(node1.right, node2.right);
        };
        const traverse = (node) => {
            if (!node) return false;
            if (compareTree(node, subRoot)) return true;
            return traverse(node.left) || traverse(node.right);
        }
        return traverse(root);
    }
}
