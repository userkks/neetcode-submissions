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
    resNode = null;
    searchTree(node, p, q) {
        if (!node) return [false, false];
        const [pLeft, qLeft] = this.searchTree(node.left, p, q);
        if (pLeft && qLeft) return [true, true];
        if ((pLeft && node.val === q.val) || (qLeft && node.val === p.val)) {
            this.resNode = node;
            return [true, true];
        }
        const [pRight, qRight] = this.searchTree(node.right, p, q);
        if (pRight && qRight) return [true, true];
        if ((pRight && node.val === q.val) || (qRight && node.val === p.val)) {
            this.resNode = node;
            return [true, true];
        }
        if ((pLeft && qRight) || (qLeft && pRight)) {
            this.resNode = node;
            return [true, true];
        }
        if (node.val === p.val) return [true, false];
        if (node.val === q.val) return [false, true];
        return [pLeft || pRight, qRight || qLeft];
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        this.searchTree(root, p, q);
        return this.resNode;
    }
}
