class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        /**
  * @param {number[][]} heights
  * @return {number[][]}
  */
        const memory = [];
        const res = [];
        for (let i = 0; i < heights.length; i++) {
            memory.push(heights[i].map(t => ({})));
        }
        const pacificNodes = [];
        const atlanticNodes = [];
        for (let j = 0; j < heights[0].length; j++) {
            pacificNodes.push([0, j]);
            atlanticNodes.push([heights.length - 1, j]);
        }
        for (let i = 0; i < heights.length; i++) {
            pacificNodes.push([i, 0]);
            atlanticNodes.push([i, heights[0].length - 1])
        }
        const bfs = (nodeList, key) => {
            const queue = [];
            for (let [i, j] of nodeList) {
                if (!memory[i][j][key]) {
                    queue.push([i, j]);
                    memory[i][j][key] = true;
                    if (memory[i][j].p && memory[i][j].a) res.push([i, j])
                }
            }
            let head = 0;
            const directions = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]
            ]
            while (head < queue.length) {
                const [i, j] = queue[head++];
                for (let [di, dj] of directions) {
                    const [ni, nj] = [i + di, j + dj];
                    if (ni < 0 || ni >= heights.length || nj < 0 || nj >= heights[0].length) continue;
                    if (!memory[ni][nj][key] && heights[ni][nj] >= heights[i][j]) {
                        queue.push([ni, nj]);
                        memory[ni][nj][key] = true;
                        if (memory[ni][nj].p && memory[ni][nj].a) res.push([ni, nj])

                    };
                }
            }
        }
        bfs(pacificNodes, 'p');
        bfs(atlanticNodes, 'a');
        return res;
    };

}
