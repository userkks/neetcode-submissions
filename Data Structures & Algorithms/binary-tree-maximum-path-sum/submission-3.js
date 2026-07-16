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
     * @return {number}
     */
    maxPathSum(root) {
        let res = Number.NEGATIVE_INFINITY;
        const dfs = (node) => {
            if (!node) return 0;
            const left = dfs(node.left);
            const right = dfs(node.right);
            res = Math.max(res, node.val+left, node.val+right, node.val+left+right, node.val);
            return Math.max(node.val+left, node.val+right, node.val);
        }
        dfs(root);
        return res;
    }
}
