class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const explore = (i, j) => {
            grid[i][j] = "#";
            const dirs = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
            ];
            let head = 0;
            const queue = [[i, j]];
            while (head < queue.length) {
                const [ai, aj] = queue[head++];
                for (let [di, dj] of dirs) {
                    const [ni, nj] = [ai + di, aj + dj];
                    if (
                        ni < 0 ||
                        ni >= grid.length ||
                        nj < 0 ||
                        nj >= grid[0].length ||
                        grid[ni][nj] !== "1"
                    )
                        continue;
                    grid[ni][nj] = "#";
                    queue.push([ni, nj]);
                }
            }
        };
        let res = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    res++;
                    explore(i, j);
                }
            }
        }
        return res;
    }
}
