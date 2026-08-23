class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const markRotten = (nodeList) => {
            const queue = [...nodeList];
            let head = 0;
            let level = 0;
            while (head < queue.length) {
                const size = queue.length - head;
                for (let s = 0; s < size; s++) {
                    const [i, j] = queue[head++];
                    for (let [di, dj] of dirs) {
                        const [ni, nj] = [i + di, j + dj];
                        if (
                            ni < 0 ||
                            ni >= grid.length ||
                            nj < 0 ||
                            nj >= grid[0].length ||
                            grid[ni][nj] !== 1
                        )
                            continue;
                        grid[ni][nj] = 2;
                        queue.push([ni, nj]);
                    }
                }
                level++;
            }
            return level - 1;
        };
        const rottenList = [];
        const freshList = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) rottenList.push([i, j]);
                else if (grid[i][j] === 1) freshList.push([i, j]);
            }
        }
        if (!freshList.length) return 0;
        const time = markRotten(rottenList);
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) return -1;
            }
        }
        return time;
    }
}
