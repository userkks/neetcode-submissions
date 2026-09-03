class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memory = Array.from({ length: m }, () => new Array(n).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0 || j === 0) {
                    memory[i][j] = 1;
                    continue;
                }
                memory[i][j] = memory[i - 1][j] + memory[i][j - 1];
            }
        }
        return memory[m - 1][n - 1];
    }
}
