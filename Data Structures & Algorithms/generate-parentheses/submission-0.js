class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const backtrack = (str, open, close) => {
            if (str.length === 2*n) res.push(str);
            if (open < n) {
                backtrack(str+'(', open+1, close);
            }
            if (close < open) {
                backtrack(str+')', open, close+1);
            }
        }
        backtrack('', 0, 0);
        return res;
    }
}
