class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const memory = {};
        for (let i=0; i<numCourses; i++) {
            memory[i] = [];
        }
        for (let [i, j] of prerequisites) {
            memory[i].push(j);
        }
        const visited = new Array(numCourses).fill(0);
        const dfs = (i) => {
            if (visited[i] === 2) return true;
            if (visited[i] === 1) return false;
            visited[i] = 1;
            const reqList = memory[i];
            for (let req of reqList) {
                if (!dfs(req)) return false;
            }
            visited[i]=2;
            return true;
        } 

        for (let i=0; i<numCourses; i++) {
            if(!dfs(i)) return false;
        }
        return true;
    }
}
