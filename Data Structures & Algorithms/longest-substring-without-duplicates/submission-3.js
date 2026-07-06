class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mem = new Map();
        let res = 0;
        for (let i=0; i<s.length; i++) {
            if (!mem.has(s[i])) {
                mem.set(s[i], i);
            } else {
                if (mem.size > res) res = mem.size
                i = mem.get(s[i]);
                mem = new Map();
            }
        }
        if (mem.size > res) res = mem.size;
        return res;
    }
}
