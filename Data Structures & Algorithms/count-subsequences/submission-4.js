class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const dp = Array.from({length: s.length+1}, () => new Array(t.length+1));
        const findCount = (i, j) => {
            if (dp[i][j] !== undefined) return dp[i][j];
            if (j === t.length) return 1;
            if (i === s.length) return 0;
            if (s[i] !== t[j]) return findCount(i+1, j);
            return dp[i][j] = findCount(i+1, j+1) + findCount(i+1, j);
        }
        return findCount(0, 0);
    }
}
