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
     * @return {number[][]}
     */
    levelOrder(root) {
        let level = [root];
        const res = [];
        if (!root) return [];
        while (level.length) {
            let newLevel = [];
            res.push(level.map(i => i.val));
            level.forEach((node) => {
                if (node.left) newLevel.push(node.left);
                if (node.right) newLevel.push(node.right);
            });
            level = newLevel
        }
        return res;
    }
}
