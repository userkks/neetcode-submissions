class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const memory = Array.from({ length: s.length + 1 }, () =>
            new Array(t.length + 1).fill(null),
        );
        const findSubs = (i, j) => {
            if (memory[i][j] !== null) return memory[i][j];
            if (j === t.length) {
                memory[i][j] = 1;
                return 1;
            }
            if (i === s.length) {
                memory[i][j] = 0;
                return 0;
            }
            let match = 0;
            if (s[i] === t[j]) match = findSubs(i + 1, j + 1);
            const temp = match + findSubs(i + 1, j);
            memory[i][j] = temp;
            return temp;
        };
        return findSubs(0, 0);
    }
}
