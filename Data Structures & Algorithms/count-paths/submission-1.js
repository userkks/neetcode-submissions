class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memory = Array.from({length: m}, () => new Array(n).fill(0));
        memory[m-1][n-1] = 1;
        const findPath = (i, j) => {
            if (memory[i][j]) return memory[i][j];
            const right = j < n-1 ? findPath(i, j+1) : 0;
            const down = i < m-1 ? findPath(i+1, j) : 0;
            memory[i][j] = right + down;
            return right + down;
        }
        return findPath(0, 0);
    }
}
