class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const dp = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const findLongest = (i, j) => {
            if (dp[i][j]) return dp[i][j];
            let max = 1;
            for (let [di, dj] of dirs) {
                const [ni, nj] = [di + i, dj + j];
                if (
                    ni < 0 ||
                    ni >= matrix.length ||
                    nj < 0 ||
                    nj >= matrix[0].length ||
                    matrix[ni][nj] <= matrix[i][j]
                )
                    continue;
                const pathLen = 1 + findLongest(ni, nj);
                max = Math.max(max, pathLen);
            }
            dp[i][j] = max;
            return max;
        };
        let longest = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                const temp = findLongest(i, j);
                longest = Math.max(temp, longest);
            }
        }
        return longest;
    }
}
