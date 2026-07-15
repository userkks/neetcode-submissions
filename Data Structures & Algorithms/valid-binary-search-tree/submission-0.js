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
     * @return {boolean}
     */
    isValidBST(root) {
        let prev = Number.NEGATIVE_INFINITY;
        const inOrder = (node) => {
            if (!node) return true;
            const left = inOrder(node.left);
            if (!left) return false;
            if (node.val > prev) {
                prev = node.val;
            } else return false
            const right = inOrder(node.right);
            if (!right) return false;
            return true
        }
        return inOrder(root);
    }
}
