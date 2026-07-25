class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = {};
        for (let i=0; i<n; i++) graph[i]=[];
        for (let [i, j] of edges) {
            graph[i].push(j);
            graph[j].push(i);
        }
        const visited = new Array(n).fill(false);
        const bfs = (nodeList) => {
            const queue = [];
            for (let [i, parent] of nodeList) {
                if (visited[i]) continue;
                queue.push([i, parent]);
                visited[i]=true;
            }
            let head=0;
            while (head<queue.length) {
                const [node, parent] = queue[head++];
                for (let nei of graph[node]) {
                    if (nei === parent) continue;
                    if (visited[nei]) continue;
                    visited[nei]=true;
                    queue.push([nei, node]);
                }
            }

        }
        let res = 0;
        for (let i in visited) {
            if (visited[i]) continue;
            bfs([[i, -1]]);
            res++;

        }
        return res;
    }
}
