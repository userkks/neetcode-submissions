class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let lcf = strs[0];
        const getLcf = (s1, s2) => {
            let res = '';
            for (let i=0; i<s1.length; i++) {
                if (s1[i] === s2[i]) res += s1[i];
                else break;
            }
            return res;
        }
        for (let i=1; i<strs.length; i++) {
            lcf = getLcf(lcf, strs[i]);
        }
        return lcf;
    }
}
