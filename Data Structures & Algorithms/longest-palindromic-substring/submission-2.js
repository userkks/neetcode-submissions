class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const getPalindrome = (i, j) => {
            let st = '';
            while (i>-1 && j<s.length && s[i] === s[j]) {
                st = s.slice(i, j+1);
                i--;
                j++;
            }
            return st;
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
