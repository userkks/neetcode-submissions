class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        if (n === 0) return [0];
        const memory = [0, 1];
        for (let i=2; i<=n; i++) {
            const half = i >> 1;
            const odd = i & 1;
            memory.push(memory[half] + odd);
        }
        return memory;
    }
}