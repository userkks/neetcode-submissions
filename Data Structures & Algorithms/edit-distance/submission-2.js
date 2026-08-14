class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const dp = Array.from({ length: word1.length }, () => new Array(word2.length).fill(null));
        const findDistance = (i, j) => {
            if (i === word1.length || j === word2.length)
                return Math.max(word1.length - i, word2.length - j);
            if (dp[i][j] !== null) return dp[i][j];
            if (word1[i] === word2[j]) {
                const temp = findDistance(i + 1, j + 1);
                dp[i][j] = temp;
                return temp;
            }
            const ins = findDistance(i, j + 1);
            const del = findDistance(i + 1, j);
            const rep = findDistance(i + 1, j + 1);
            const min = 1 + Math.min(ins, del, rep);
            dp[i][j] = min;
            return min;
        };
        return findDistance(0, 0);
    }
}
