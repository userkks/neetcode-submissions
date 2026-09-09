class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const dp = Array.from({ length: matrix.length }, () => new Array(matrix[0].length));
        let res = 0;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];
        const dfs = (i, j) => {
            if (dp[i][j] !== undefined) return dp[i][j];
            let maxLen = 0;
            for (let [di, dj] of dirs) {
                const [ni, nj] = [i + di, j + dj];
                if (
                    ni < 0 ||
                    ni >= matrix.length ||
                    nj < 0 ||
                    nj >= matrix[0].length ||
                    matrix[ni][nj] <= matrix[i][j]
                )
                    continue;
                maxLen = Math.max(maxLen, dfs(ni, nj));
            }
            return dp[i][j] = 1 + maxLen;
        };
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                res = Math.max(res, dfs(i, j));
            }
        }
        return res;
    }
}
