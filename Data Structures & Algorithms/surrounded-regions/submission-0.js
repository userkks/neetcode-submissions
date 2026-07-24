class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const visited = Array.from({length: board.length}, () => new Array(board[0].length).fill(false));
    const bfs = (nodeList) => {
        const queue = [];
        const visitedList = [];
        let edged = false;
        for (let [i, j] of nodeList) {
            queue.push([i, j]);
            visited[i][j] = true;
            visitedList.push([i,j]);
            if (!edged && (i===0 || i===board.length-1 || j===0 || j===board[0].length-1)) edged = true;
        }
        let head=0;
        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ]
        while (head<queue.length) {
            const [i, j] = queue[head++];
            for (let [di, dj] of directions) {
                const [ni, nj] = [i+di, j+dj];
                if (ni<0 || ni>=board.length || nj<0 || nj>=board[0].length) continue;
                if (board[ni][nj] === 'O' && !visited[ni][nj]) {
                    queue.push([ni, nj]);
                    visited[ni][nj]=true;
                    visitedList.push([ni, nj]);
                    if (!edged && (ni===0 || ni===board.length-1 || nj===0 || nj===board[0].length-1)) edged = true;

                }
            }
        }
        return {edged, nodeList: visitedList}
    }
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            if (board[i][j] === 'O' && !visited[i][j]) {
                const {edged, nodeList} = bfs([[i,j]]);
                if (edged) continue;
                for (let [mi, mj] of nodeList) {
                    board[mi][mj] = 'X';
                }
            }
        }
    }
    }
}
