class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const graph = {};
        for (let [i, j] of tickets) {
            if (!graph[i]) graph[i] = [];
            graph[i].push(j);
        }
        for (let a in graph) {
            graph[a].sort();
            graph[a].reverse();
        }
        const res = [];
        const dfs = (i) => {
            while (graph[i] && graph[i].length) {
                const next = graph[i].pop();
                dfs(next);
            }
            res.push(i);
        }
        dfs('JFK')
        return res.reverse()

    }
}
