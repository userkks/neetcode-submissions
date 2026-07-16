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
        let i = 0;
        let arr = data.split(',');
        const build = () => {
            const curr = arr[i++];
            if (curr === 'N') return null;
            const node = new TreeNode(parseInt(curr));
            node.left = build();
            node.right = build();
            return node;
        } 
        return build()
    }
}
