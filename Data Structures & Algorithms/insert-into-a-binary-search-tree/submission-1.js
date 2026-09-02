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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if (!root) return new TreeNode(val);
        if (val > root.val) {
            if (!root.right) root.right = new TreeNode(val);
            else this.insertIntoBST(root.right, val);
        }
        else {
            if (!root.left) root.left = new TreeNode(val);
            else this.insertIntoBST(root.left, val);
        }
        return root;
    }
}
