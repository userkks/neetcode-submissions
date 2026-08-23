class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const explore = (i, j) => {
            let count = 1;
            grid[i][j] = "#";
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
                count += explore(ni, nj);
            }
            return count;
        };
        let res = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    res = Math.max(explore(i, j), res);
                }
            }
        }
        return res;
    }
}
