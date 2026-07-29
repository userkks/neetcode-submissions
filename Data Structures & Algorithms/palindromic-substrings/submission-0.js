class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const expand = (i, j) => {
            let count = 0;
            while (i>=0 && j<s.length && s[i] === s[j]) {
                count++;
                i--;
                j++;
            }
            return count;
        }
        let count = 0;
        for (let i=0; i<s.length; i++) {
            count += expand(i, i);
            count += expand(i, i+1);
        }
        return count;
    }
}
