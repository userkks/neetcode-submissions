class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = new Array(edges.length+1).fill(-1);
        for (let i=0; i<edges.length+1; i++) {
            parent[i]=i;
        }
        const find = (i) => {
            if (parent[i] !== i) {
                parent[i] = find(parent[i]);
            }
            return parent[i];
        }

        const union = (i, j) => {
            const rootI = find(i);
            const rootJ = find(j);
            if (rootI === rootJ) return false;
            parent[rootJ] = rootI;
            return true;
        }

        for (let [i, j] of edges) {
            if (!union(i, j)) return [i, j];
        }
        
    }
}
