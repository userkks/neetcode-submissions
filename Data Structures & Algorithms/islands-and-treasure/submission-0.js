class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const bfs = (m, n) => {
            const queue = [[m,n]];
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
                let [ni, nj] = [i+di, j+dj];
                if (ni<0 || ni>=grid.length || nj<0 || nj>=grid[0].length) continue;
                if (grid[ni][nj] === INF) {
                    grid[ni][nj] = grid[i][j]+1;
                    queue.push([ni, nj]);
                } else if (grid[ni][nj] > 0 && grid[ni][nj] > grid[i][j]+1) {
                    grid[ni][nj] = grid[i][j]+1;
                    queue.push([ni, nj]);
                }
            }
            }
            
        }
        for (let i=0; i<grid.length; i++) {
            for (let j=0; j<grid[0].length; j++) {
                if (grid[i][j] === 0) {
                    bfs(i, j);
                }
            }
        }
        return grid;
    }
}
