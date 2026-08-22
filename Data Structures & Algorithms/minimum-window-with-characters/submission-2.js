class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need = new Map();
        for (let l of t) {
            need.set(l, (need.get(l) || 0) + 1);
        }
        let i = 0;
        let j = 0;
        let required = 0;
        let curLen = Infinity;
        let res = "";
        const have = new Map();
        while (j < s.length) {
            if (need.has(s[j])) {
                have.set(s[j], (have.get(s[j]) || 0) + 1);
                if (need.get(s[j]) === have.get(s[j])) {
                    required++;
                }
            }
            while (required === need.size) {
                let temp = j - i + 1;
                if (temp < curLen) {
                    curLen = temp;
                    res = s.slice(i, j + 1);
                }
                const ch = s[i];
                i++;
                if (have.has(ch)) {
                    have.set(ch, have.get(ch) - 1);
                    if (have.get(ch) < need.get(ch)) {
                        required--;
                    }
                }
            }
            j++;
        }
        return res;
    }
}
