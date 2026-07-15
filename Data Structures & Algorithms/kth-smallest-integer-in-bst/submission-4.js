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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res;
        let count = k;
        const inOrder = (node) => {
            if (!node || count < 1) return;
            inOrder(node.left, count);
            count--;
            if (!count) {
                res = node.val;
            }
            inOrder(node.right, count);
        }
        inOrder(root);
        return res;
    }
}
