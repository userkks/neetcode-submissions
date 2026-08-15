class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const dp = Array.from({ length: s.length + 1 }, () => new Array(p.length + 1).fill(null));
        const match = (i, j) => {
            if (dp[i][j] !== null) return dp[i][j];
            if (j === p.length) {
                return i === s.length;
            }
            const firstMatch = i < s.length && (s[i] === p[j] || p[j] === ".");
            if (j + 1 < p.length && p[j + 1] === "*") {
                const temp = match(i, j + 2) || (firstMatch && match(i + 1, j));
                dp[i][j] = temp;
                return temp;
            }
            const temp = firstMatch && match(i + 1, j + 1);
            dp[i][j] = temp;
            return temp;
        };
        return match(0, 0);
    }
}
