class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const memory = new Array(edges.length+1).fill(-1);
        for (let i=0; i<edges.length+1; i++) {
            memory[i]=i;
        }
        const find = (i) => {
            if (memory[i] !== i) {
                memory[i] = find(memory[i]);
            }
            return memory[i];
        }

        const union = (i, j) => {
            const rootI = find(i);
            const rootJ = find(j);
            if (rootI === rootJ) return false;
            memory[rootJ] = rootI;
            return true;
        }

        for (let [i, j] of edges) {
            if (!union(i, j)) return [i, j];
        }
        
    }
}
