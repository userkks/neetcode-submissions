class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const getVal = (i) => {
            const row = Math.floor(i / matrix[0].length);
            const column = i % matrix[0].length;
            return matrix[row][column];
        }
        const binarySearch = (i, j) => {
            if (i>j) return -1;
            const mid = Math.floor((j-i+1)/2)+i;
            if (getVal(mid) === target) return mid;
            else if (target > getVal(mid)) return binarySearch(mid+1, j);
            else return binarySearch(i, mid-1);
        }
        return binarySearch(0, matrix[0].length * matrix.length -1) !== -1;
    }
}
