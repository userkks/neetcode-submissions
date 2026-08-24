class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n-1) return false;
        const graph = Array.from({length: n}, () => []);
        for (let [i, j] of edges) {
            graph[i].push(j);
            graph[j].push(i);
        }
        const visited = new Array(n).fill(false);
        const dfs = (i, root) => {
            if (visited[i]) return false;
            visited[i] = true;
            for (let nei of graph[i]) {
                if (nei === root) continue;
                dfs(nei, i);
            }
        }
        dfs(0, null);
        return !visited.some(i => !i);
    }
}
