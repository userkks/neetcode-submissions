class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let res = 0;
        const findWays = (i, target) => {
            if (i === nums.length && !target) return res++;
            if (i >= nums.length) return;
            findWays(i + 1, target - nums[i]);
            findWays(i + 1, target + nums[i]);
        }
        findWays(0, target);
        return res;
    }
}
