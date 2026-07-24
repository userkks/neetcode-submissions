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
        const done = new Array(numCourses).fill(false);
        const dfs = (i, visited=new Set()) => {
            if (done[i]) return true;
            visited.add(i);
            const reqList = memory[i];
            for (let req of reqList) {
                if (visited.has(req)) return false;
                if (!dfs(req, visited)) return false;
            }
            done[i]=true;
            visited.delete(i);
            return true;
        } 

        for (let i=0; i<numCourses; i++) {
            if(!dfs(i)) return false;
        }
        return true;
    }
}
