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
     * @return {number[]}
     */
    rightSideView(root) {
        let level = [root];
        let res = [];
        if (!root) return res;
        while(level.length) {
            res.push(level[level.length-1].val);
            let newLevel = [];
            level.forEach((node) => {
                if (node.left) newLevel.push(node.left);
                if (node.right) newLevel.push(node.right);
            });
            level = newLevel;
        }
        return res;
    }
}
