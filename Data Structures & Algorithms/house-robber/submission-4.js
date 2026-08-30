class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memory = [0, 0];
        for (let i=0; i<nums.length; i++) {
            const steal = nums[i] + memory[i];
            const noSteal = memory[i+1];
            memory.push(Math.max(steal, noSteal));
        }
        return memory.pop();
    }
}
