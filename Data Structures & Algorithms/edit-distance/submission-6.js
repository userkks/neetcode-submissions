class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const dp = Array.from({length: word1.length+1}, () => new Array(word2.length+1))
        const findOps = (i, j) => {
            if (dp[i][j] !== undefined) return dp[i][j];
            if (i === word1.length && j === word2.length) return dp[i][j] = 0;
            if (i === word1.length) return dp[i][j] = word2.length-j;
            if (j === word2.length) return dp[i][j] = word1.length-i;
            if (word1[i] === word2[j]) return dp[i][j] = findOps(i + 1, j + 1);
            return dp[i][j] = 1 + Math.min(findOps(i, j + 1), findOps(i + 1, j), findOps(i + 1, j + 1));
        };
        return findOps(0, 0);
    }
}
