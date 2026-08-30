class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memory = [1];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "0") {
                if (i > 0 && (s[i - 1] === "1" || s[i - 1] === "2")) {
                    memory.push(memory[i - 1]);
                } else {
                    return 0;
                }
            } else {
                if (i > 0 && (s[i - 1] === "1" || (s[i - 1] === "2" && parseInt(s[i]) < 7))) {
                    memory.push(memory[i - 1] + memory[i]);
                } else {
                    memory.push(memory[i]);
                }
            }
        }
        return memory.pop();
    }
}
