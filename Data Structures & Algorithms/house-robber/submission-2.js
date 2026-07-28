class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // const loot = (i) => {
        //     if (i===0) return nums[i];
        //     if (i === 1) return Math.max(nums[0], nums[1]);
        //     return Math.max(loot(i-2)+nums[i], loot(i-1));
        // }
        // return loot(nums.length-1)
        if (nums.length ===1) return nums[0];
        let memory = [nums[0], Math.max(nums[0], nums[1])];
        for (let i=2; i<nums.length; i++) {
            memory.push(Math.max(memory[i-2]+nums[i], memory[i-1]))
        }
        return memory.pop()
    }
}
