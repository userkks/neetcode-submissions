class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const memory = {};
        for (let i=0; i<numCourses; i++) {
            memory[i] = [];
        }
        for (let [i, j] of prerequisites) {
            memory[i].push(j);
        }
        const visited = new Array(numCourses).fill(0);
        const res = [];
        const dfs = (i) => {
            if (visited[i] === 1) return false;
            if (visited[i] === 2) return true;
            visited[i]=1;
            for (let req of memory[i]) {
                if (!dfs(req)) return false;
            }
            res.push(i);
            visited[i]=2;
            return true;
        }
        for (let i=0; i<numCourses; i++) {
            if(!dfs(i)) return [];
        }
        return res;
    }
}
