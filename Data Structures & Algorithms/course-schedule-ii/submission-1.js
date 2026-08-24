class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const inDegree = new Array(numCourses).fill(0);
        const graph = Array.from({ length: numCourses }, () => []);
        for (let [j, i] of prerequisites) {
            inDegree[j]++;
            graph[i].push(j);
        }
        const queue = [];
        for (let i = 0; i < inDegree.length; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }
        let head = 0;
        const order = [];
        while (head < queue.length) {
            const node = queue[head++];
            order.push(node);
            for (let nei of graph[node]) {
                inDegree[nei]--;
                if (inDegree[nei] === 0) queue.push(nei);
            }
        }
        return order.length === numCourses ? order : [];
    }
}
