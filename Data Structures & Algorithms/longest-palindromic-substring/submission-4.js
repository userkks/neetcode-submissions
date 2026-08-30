class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const getPalindrome = (i, j) => {
            if (j === s.length) return '';
            while (i>-1  && s[i] === s[j]) {
                i--;
                j++;
            }
            return s.slice(++i, j);
        }
        let res = '';
        for (let i=0; i<s.length; i++) {
            const temp1 = getPalindrome(i, i);
            if (temp1.length > res.length) res = temp1;
            const temp2 = getPalindrome(i, i+1);
            if (temp2.length > res.length) res = temp2;
        }
        return res;
    }
}
