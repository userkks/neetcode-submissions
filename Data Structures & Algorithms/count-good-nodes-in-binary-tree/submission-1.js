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
        const maxStack = [Number.NEGATIVE_INFINITY];
        let res = 0;
        const inOrder = (node) => {
            if (!node) return;
            const topStack = maxStack[maxStack.length-1];
            if (node.val >= topStack) {
                maxStack.push(node.val);
                res++
            }
            inOrder(node.left);
            inOrder(node.right);
            if (maxStack[maxStack.length-1] === node.val) maxStack.pop();
        }
        inOrder(root);
        return res;
    }
}
