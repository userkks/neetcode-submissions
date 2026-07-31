class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        const memory = new Array(s.length).fill(false);
        memory.push(true);
        for (let i = s.length - 1; i >= 0; i--) {
            for (let word of wordSet) {
                if (s.length-i >= word.length &&
                    s.substring(i, i+word.length) === word &&
                    memory[i + word.length]) {
                    memory[i] = true;
                    break;
                }
            }
        }
        return memory[0];
    }
}
