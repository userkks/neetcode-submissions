class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMemory = new Array(9).fill(1).map(i => new Set())
        const columnMemory = new Array(9).fill(1).map(i => new Set())
        const cellMemory = new Array(9).fill(1).map(i => new Set())
        for (let i=0; i<9; i++) {
            for (let j=0; j<9; j++) {
                const num  = board[i][j];
                if (num === '.') continue;
                if (rowMemory[i].has(num)) return false;
                if (columnMemory[j].has(num)) return false;
                const cellColumn = Math.floor(j/3);
                const cellRow = Math.floor(i/3);
                if (cellMemory[cellRow * 3 + cellColumn].has(num)) return false;
                rowMemory[i].add(num);
                columnMemory[j].add(num);
                cellMemory[cellRow * 3 + cellColumn].add(num);
            }
        }
        return true;
    }
}
 