class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowM = new Map();
        const colM = new Map();
        const cellM = new Map();
        for (let i=0; i<9; i++) {
            rowM.set(i, new Set());
            colM.set(i, new Set());
            cellM.set(i, new Set());
        }
        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[0].length; j++) {
                if (board[i][j] === '.') continue;
                if (rowM.get(i).has(board[i][j])) return false;
                rowM.get(i).add(board[i][j]);
                if (colM.get(j).has(board[i][j])) return false;
                colM.get(j).add(board[i][j]);
                const cellId = Math.floor(i/3) * 3 + Math.floor(j/3);
                if (cellM.get(cellId).has(board[i][j])) return false;
                cellM.get(cellId).add(board[i][j]);
            }
        }
        return true;
    }
}
