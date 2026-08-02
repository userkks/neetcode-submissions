class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0];
        let curMax = nums[0];
        for (let i=1; i<nums.length; i++) {
            if (curMax < 0) curMax = 0;
            curMax += nums[i];
            maxSub = Math.max(maxSub, curMax);
        }
        return maxSub;
    }
}
