class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const dp = Array.from({ length: s.length + 1 }, () => new Array(t.length + 1).fill(null));
        for (let i = s.length; i >= 0; i--) {
            for (let j = t.length; j >= 0; j--) {
                if (j === t.length) {
                    dp[i][j] = 1;
                    continue;
                }
                if (i === s.length) {
                    dp[i][j] = 0;
                    continue;
                }
                let match = 0;
                if (s[i] === t[j]) {
                    match = dp[i + 1][j + 1];
                }
                match += dp[i + 1][j];
                dp[i][j] = match;
            }
        }
        return dp[0][0];
    }
}
