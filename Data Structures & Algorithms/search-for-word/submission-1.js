class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];
        const findPath = (i, j, k) => {
            if (board[i][j] !== word[k]) return false;
            if (k === word.length-1) return true;
            const tempVal = board[i][j];
            board[i][j] = '#';
            for (let [di, dj] of dirs) {
                const [ni, nj] = [i+di, j+dj];
                if (ni<0 || ni>=board.length || nj<0 || nj>=board[0].length || board[ni][nj] === '#')
                    continue;
                if (findPath(ni, nj, k+1)) return true;
            }
            board[i][j] = tempVal;
            return false;
        };
        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[0].length; j++) {
                if (findPath(i, j, 0)) return true;
            }
        }
        return false;
    }
}
