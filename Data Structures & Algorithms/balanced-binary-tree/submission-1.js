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
        if (!node) return [true, -1];
        const [leftBalanced, leftHeight] = this.postTraverse(node.left);
        if (!leftBalanced) return [false, leftHeight];
        const [rightBalanced, rightHeight] = this.postTraverse(node.right);
        if (!rightBalanced) return [false, rightHeight];
        return [Math.abs(leftHeight-rightHeight) < 2, 1 + Math.max(leftHeight, rightHeight)];
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.postTraverse(root)[0];
    }
}
