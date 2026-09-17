class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let low = 0;
        let high = 0;

        for (const ch of s) {
            if (ch === "(") {
                low++;
                high++;
            } else if (ch === ")") {
                low--;
                high--;
            } else {
                // '*' can be '(', ')' or empty
                low--;
                high++;
            }

            if (high < 0) return false;

            low = Math.max(0, low);
        }

        return low === 0;
    }
}
