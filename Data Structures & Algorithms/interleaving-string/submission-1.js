class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;
        const dp = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(null));
        const findInterleave = (i, j) => {
            if (i + j === s3.length) return true;
            if (dp[i][j] !== null) return dp[i][j];
            if (i < s1.length && s1[i] === s3[i + j] && findInterleave(i + 1, j)) {
                dp[i][j] = true;
                return true;
            }
            if (j < s2.length && s2[j] === s3[i + j] && findInterleave(i, j + 1)) {
                dp[i][j] = true;
                return true;
            }
            dp[i][j] = false;
            return false;
        };
        return findInterleave(0, 0);
    }
}
