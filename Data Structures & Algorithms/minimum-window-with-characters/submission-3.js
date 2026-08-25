class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFreq = new Map();
        for (let l of t) {
            tFreq.set(l, (tFreq.get(l) || 0) + 1);
        }
        const sFreq = new Map();
        let start = 0;
        let required = tFreq.size;
        let res = '';
        for (let end=0; end<s.length; end++) {
            if (tFreq.has(s[end])) {
                sFreq.set(s[end], (sFreq.get(s[end]) || 0) + 1);
                if (tFreq.get(s[end]) === sFreq.get(s[end])) required--;
            }
            while (required === 0) {
                if (!res || end-start+1 < res.length) {
                    res = s.slice(start, end+1);
                }
                if (sFreq.has(s[start])) {
                    sFreq.set(s[start], sFreq.get(s[start])-1);
                    if (sFreq.get(s[start]) < tFreq.get(s[start])){
                        required++;
                    }
                }
                start++;
            }

        }
        return res;
    }
}
