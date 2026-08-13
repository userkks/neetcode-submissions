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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const pos = {};
        inorder.forEach((i, ind) => (pos[i] = ind));
        const makeTree = (i, j, r) => {
            if (r < 0) return null;
            const root = new TreeNode(preorder[r]);
            const rootPos = pos[preorder[r]];
            const leftRoot = rootPos - 1 - i < 0 ? -1 : r + 1;
            const leftTree = makeTree(i, rootPos - 1, leftRoot);
            const rightRoot = j - rootPos - 1 < 0 ? -1 : leftTree ? rootPos - i + r + 1 : r + 1;
            const rightTree = makeTree(rootPos + 1, j, rightRoot);
            root.left = leftTree;
            root.right = rightTree;
            return root;
        };
        return makeTree(0, preorder.length - 1, 0);
    }
}
