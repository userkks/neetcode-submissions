class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        if (n === 0) return [0];
        const memory = [0, 1];
        for (let i=2; i<=n; i++) {
            const half = Math.floor(i/2);
            const odd = i % 2;
            memory.push(memory[half] + (odd ? 1 : 0));
        }
        return memory;
    }
}