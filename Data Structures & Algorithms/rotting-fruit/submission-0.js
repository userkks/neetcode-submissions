class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const bfs = (nodeList) => {
            const queue = nodeList;
            let head = 0;
            let level = -1;
            let levelSize = nodeList.length;
            const directions = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]
            ]
            while (head < queue.length) {
                levelSize=queue.length-head;
                for (let count=0; count<levelSize; count++ ) {
                    const [i, j] = queue[head++];
                    for (let [di, dj] of directions) {
                        const [ni, nj] = [i+di, j+dj];
                        if (ni<0 || ni>=grid.length || nj<0 || nj>= grid[0].length) continue;
                        if (grid[ni][nj] === 1) {
                            grid[ni][nj] = 2;
                            queue.push([ni, nj]);
                        }
                    }
                }
                level++;
                

            }
            return level;
        }
        const rottenList = [];
        let fresh=0;
        for (let i=0; i<grid.length; i++) {
            for (let j=0; j<grid[0].length; j++) {
                if (grid[i][j]===2) rottenList.push([i,j]);
                if (grid[i][j]===1) fresh++;
            }
        }
        if (!fresh) return 0;
        const time = bfs(rottenList);

        for (let i=0; i<grid.length; i++) {
            for (let j=0; j<grid[0].length; j++) {
                if (grid[i][j]===1) return -1;
            }
        }
        return time;
    }
}
