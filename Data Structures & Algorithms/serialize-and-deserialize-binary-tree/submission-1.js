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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let st = [];
        const preOrder = (node) => {
            st.push(node ? node.val : 'N');
            if (node) {
                preOrder(node.left);
                preOrder(node.right);
            }
        }
        preOrder(root);
        return st.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = data.split(',');
        const head = arr[0] === 'N' ? null : new TreeNode(parseInt(arr[0]));
        let i = 1;
        const makeTree = (node) => {
            if (i >= arr.length) return;
            if (arr[i] === 'N') node.left = null
            else {
                node.left = new TreeNode(parseInt(arr[i]));
                i++;
                makeTree(node.left);
            }
            i++;
            if (i >= arr.length) return;
            if (arr[i] === 'N') node.right = null;
            else {
                node.right = new TreeNode(parseInt(arr[i]));
                i++
                makeTree(node.right);
            }
        }
        makeTree(head);
        return head;
    }
}
