class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const idsR = new Set();
        const idsC = new Set();
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    idsR.add(i);
                    idsC.add(j);
                }
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (idsR.has(i) || idsC.has(j)) matrix[i][j] = 0;
            }
        }
    }
}
