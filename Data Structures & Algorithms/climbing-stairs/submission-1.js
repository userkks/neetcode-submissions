class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memory = [1, 1]
        for (let i=2; i<n+1; i++) {
            memory.push(memory[i-1]+memory[i-2]);
        }
        return memory.pop()
    }
}
