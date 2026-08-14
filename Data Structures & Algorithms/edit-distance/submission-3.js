class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const memory = Array.from({ length: word1.length + 1 }, () =>
            new Array(word2.length + 1).fill(0),
        );
        for (let i = 0; i <= word1.length; i++) {
            for (let j = 0; j <= word2.length; j++) {
                if (i === 0 || j === 0) memory[i][j] = Math.max(i, j);
                else if (word1[i - 1] === word2[j - 1]) memory[i][j] = memory[i - 1][j - 1];
                else
                    memory[i][j] =
                        1 + Math.min(memory[i - 1][j - 1], memory[i][j - 1], memory[i - 1][j]);
            }
        }
        return memory[word1.length][word2.length];
    }
}
