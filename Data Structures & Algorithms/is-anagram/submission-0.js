class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const memory = {};
        for (let i=0; i<s.length; i++) {
            if (s[i] in memory) memory[s[i]]++;
            else memory[s[i]] = 1;
        }
        for (let i=0; i<t.length; i++) {
            if (!(t[i] in memory) || memory[t[i]] === 0) return false;
            memory[t[i]]--;
        }
        return true;
    }
}
