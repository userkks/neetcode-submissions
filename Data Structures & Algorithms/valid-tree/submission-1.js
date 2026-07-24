class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const matrix = Array.from({length: n}, () => new Array(n).fill(0));
        for (let [i, j] of edges) {
            matrix[i][j] = 1;
            matrix[j][i] = 1;
        }
        const visited = new Array(n).fill(0);
        const dfs = (i, parent=-1) => {
            if (visited[i] === 1) return false;
            visited[i] = 1;
            for (let j=0; j<n; j++) {
                if (j === parent) continue;
                if (matrix[i][j] === 1 && !dfs(j, i)) return false;
            }
            return true;       
        }
        const temp = dfs(0);
        if (!temp) return false;
        return !visited.some(i => i===0)
    }
}
