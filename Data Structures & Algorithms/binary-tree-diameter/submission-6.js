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
    postTraverse(node) {
        if (!node) return [-1, -1]
        const [leftBreadth, leftMaxPath] = this.postTraverse(node.left);
        const [rightBreadth, rightMaxPath] = this.postTraverse(node.right);
        const breadth = Math.max(leftBreadth, rightBreadth, leftMaxPath + rightMaxPath + 2);
        const maxPath = 1 + Math.max(leftMaxPath, rightMaxPath);
        return [breadth, maxPath];
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const [breadth, maxPath] = this.postTraverse(root);
        return breadth;

    }
}
