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
    goodNodes(root) {
        let res = 0;
        const inOrder = (node, curMax) => {
            if (!node) return;
            if (node.val >= curMax) {
                curMax = node.val;
                res++;
            }
            inOrder(node.left, curMax);
            inOrder(node.right, curMax);
        }
        inOrder(root, Number.NEGATIVE_INFINITY);
        return res;
    }
}
