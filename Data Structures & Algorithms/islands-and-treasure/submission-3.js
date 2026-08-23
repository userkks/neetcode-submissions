class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const inf = 2147483647;
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const markDistance = (nodeList) => {
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
                            grid[ni][nj] !== inf
                        )
                            continue;
                        grid[ni][nj] = level+1;
                        queue.push([ni, nj]);
                    }
                }
                level++;
            }
        };
        const landList = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 0) landList.push([i, j]);
            }
        }
        markDistance(landList);
    }
}
