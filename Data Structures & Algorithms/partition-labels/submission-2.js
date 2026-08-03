class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(s) {
        const memory = new Map();
        for (let i = 0; i < s.length; i++) {
            memory.set(s[i], i);
        }
        let start = 0;
        let end = 0;
        const res = [];
        for (let i = 0; i < s.length; i++) {
            end = Math.max(end, memory.get(s[i]));
            if (i === end) {
                res.push(i - start + 1);
                start = i + 1;
            }
        }
        return res;
    }
}
