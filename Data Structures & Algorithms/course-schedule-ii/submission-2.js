class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);
        for (let [i, j] of prerequisites) {
            graph[i].push(j);
        }
        const res = [];
        const findOrder = (i) => {
            if (visited[i] === 1) return false;
            if (visited[i] === 2) return true;
            visited[i] = 1;
            for (let req of graph[i]) {
                const temp = findOrder(req);
                if (!temp) return false;
            }
            visited[i] = 2;
            res.push(i);
            return true;
        };

        let visited = new Array(numCourses).fill(0);
        for (let i = 0; i < visited.length; i++) {
            if (visited[i] === 0) {
                const temp = findOrder(i);
                if (!temp) return [];
            }
        }
        return res;
    }
}
