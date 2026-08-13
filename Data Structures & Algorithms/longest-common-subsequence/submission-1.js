class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memory = Array.from({ length: text1.length+1 }, () => new Array(text2.length+1).fill(0));
        for (let i = 0; i <= text1.length; i++) {
            for (let j = 0; j <= text2.length; j++) {
                if (i===0 || j===0) memory[i][j] = 0;
                else if (text1[i-1] === text2[j-1]) {
                    memory[i][j] = 1 + memory[i-1][j-1];
                } else {
                    memory[i][j] = Math.max(memory[i][j-1], memory[i-1][j])
                }
            }
        }
        return memory[text1.length][text2.length];
    }
}
