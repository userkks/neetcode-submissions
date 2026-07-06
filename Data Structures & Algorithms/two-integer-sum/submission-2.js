class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();
        for (let i=0; i<nums.length; i++) {
            const temp = target-nums[i];
            if (memory.has(temp)) return [memory.get(temp), i];
            memory.set(nums[i], i);
        }
        return false;
    }
}
