class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let farthest = 0;
        let left = 0;
        let right = 0;
        let jumps = 0;
        while (farthest < nums.length - 1) {
            for (let i = left; i <= right; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }
            left = right + 1;
            right = farthest;
            jumps++;

        }
        return jumps;
    }
}
