class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();
        for (let i=0; i<nums.length; i++) {
            if (memory.has(target-nums[i])) return [memory.get(target-nums[i]), i];
            memory.set(nums[i], i);
        }
        return false;
    }
}
