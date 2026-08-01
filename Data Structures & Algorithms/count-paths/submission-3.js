class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memory = Array.from({ length: m }, () => new Array(n).fill(0));
        memory[m - 1][n - 1] = 1;
        let curNodes = [[0, 0]];
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                if (i === m - 1 && j === n - 1) continue;
                const right = j < n - 1 ? memory[i][j + 1] : 0;
                const down = i < m - 1 ? memory[i + 1][j] : 0;
                memory[i][j] = right + down;
            }
        }
        return memory[0][0];
    }
}
