class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Array(n).fill(false);
        const graph = Array.from({ length: n }, () => []);
        for (let [i, j] of edges) {
            graph[i].push(j);
            graph[j].push(i);
        }
        const dfs = (i) => {
            if (visited[i]) return;
            visited[i] = true;
            for (let nei of graph[i]) {
                dfs(nei);
            }
        };
        let res = 0;
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i);
                res++;
            }
        }
        return res;
    }
}
