class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;
        const dp = Array.from({ length: s1.length+1 }, () => new Array(s2.length+1));
        const findInterLeave = (i1, i2) => {
            if (dp[i1][i2] !== undefined) return dp[i1][i2];
            if (i1 === s1.length && i2 === s2.length) return true;
            if (s1[i1] === s3[i1 + i2] && findInterLeave(i1 + 1, i2)) {
                dp[i1][i2] = true;
                return true;
            }
            if (s2[i2] === s3[i1 + i2] && findInterLeave(i1, i2 + 1)) {
                dp[i1][i2] = true;
                return true;
            }
            dp[i1][i2] = false;
            return false;
        };
        return findInterLeave(0, 0);
    }
}
