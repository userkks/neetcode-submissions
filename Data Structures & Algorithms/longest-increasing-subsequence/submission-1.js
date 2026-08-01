class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const memory = new Array(nums.length).fill(undefined);
        let res = -Infinity;
        for (let i = nums.length - 1; i >= 0; i--) {
            let max = 1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) max = Math.max(max, 1 + memory[j]);
            }
            res = Math.max(res, max);
            memory[i] = max;
        }
        return res;
    }
}
