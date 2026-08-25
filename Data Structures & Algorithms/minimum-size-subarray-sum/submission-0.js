class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let start = 0;
        let curSum = 0;
        let res = Infinity;
        for (let i=0; i<nums.length; i++) {
            curSum += nums[i];
            while (curSum >= target && start<=i) {
                res = Math.min(res, i-start+1);
                curSum -= nums[start];
                start++;
            }
        }
        return res === Infinity ? 0 : res;
    }
}
