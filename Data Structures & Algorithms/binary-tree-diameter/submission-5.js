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
        let leftBreadth;
        let leftMaxPath;
        [leftBreadth, leftMaxPath] = this.postTraverse(node.left);
        let rightBreadth;
        let rightMaxPath;
        [rightBreadth, rightMaxPath] = this.postTraverse(node.right);
        let breadth = Math.max(leftBreadth, rightBreadth, leftMaxPath + rightMaxPath + 2);
        let maxPath = 1 + Math.max(leftMaxPath, rightMaxPath);
        return [breadth, maxPath];
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let breadth;
        let maxPath;
        [breadth, maxPath] = this.postTraverse(root);
        return breadth;

    }
}
