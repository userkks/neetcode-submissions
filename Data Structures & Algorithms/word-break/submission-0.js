class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        const memory = new Array(s.length + 1).fill(undefined);
        const dfs = (ind) => {
            if (memory[ind] !== undefined) return memory[ind];
            if (ind === s.length) return true;
            let st = '';
            for (let i = ind; i < s.length; i++) {
                st += s[i];
                if (wordSet.has(st) && dfs(i + 1)) {
                    memory[ind] = true;
                    return true;
                }
            }
            memory[ind] = false;
            return false;
        }
        return dfs(0);
    }
}
