class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memory = [0, 0];
        for (let i=0; i<cost.length; i++) {
            const v = Math.min(memory[i-1+2], memory[i-2+2]) + cost[i];
            memory.push(v);
        }
        return Math.min(memory.pop(), memory.pop());
    }
}
