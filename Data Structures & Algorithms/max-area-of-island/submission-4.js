class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let res=0;
        const getNeighbors = (i,j) => {
            return [
                ...(i>0 ? [[i-1, j]] : []),
                ...(j<grid[0].length-1 ? [[i, j+1]] : []),
                ...(i<grid.length-1 ? [[i+1, j]] : []),
                ...(j>0 ? [[i, j-1]] : [])
            ]
        }
        const dfs = (i, j) => {
            grid[i][j]=2;
            const neighbors = getNeighbors(i,j);
            let explored = 1;
            for (const land of neighbors) {
                if (grid[land[0]][land[1]] !== 1) continue;
                explored += dfs(land[0], land[1]);
            }
            return explored;

        }
        for (let i=0; i<grid.length; i++) {
            for (let j=0; j<grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    const temp = dfs(i, j);
                    console.log(temp);
                    res = Math.max(temp, res);
                }
            }
        }
        console.log(grid)
        return res;
    }
}
