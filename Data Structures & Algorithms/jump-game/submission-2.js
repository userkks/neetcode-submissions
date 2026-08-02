class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let currentTrue = nums.length - 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            const jump = nums[i];
            if (currentTrue <= i + jump) {
                currentTrue = i;
            }
        }
        return currentTrue === 0;
    }
}
