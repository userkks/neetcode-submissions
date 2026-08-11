class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        const memory = [[0, nums[0]]];
        for (let i = 1; i < nums.length; i++) {
            const steal = nums[i] + memory[i - 1][0];
            const noSteal = Math.max(memory[i - 1][0], memory[i - 1][1]);
            memory.push([noSteal, steal]);
        }
        const first = Math.max(...memory[nums.length - 2]);
        const secondMemory = [[0, nums[1]]];
        for (let i = 2; i < nums.length; i++) {
            const steal = nums[i] + secondMemory[secondMemory.length - 1][0];
            const noSteal = Math.max(...secondMemory[secondMemory.length - 1]);
            secondMemory.push([noSteal, steal]);
        }
        return Math.max(first, ...secondMemory.pop());
    }
}
