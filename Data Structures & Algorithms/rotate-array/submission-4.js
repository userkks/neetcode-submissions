class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const reverse = (i, j) => {
            while (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
                j--;
            }
        };
        reverse(0, nums.length - 1);
        k = k % nums.length;
        reverse(0, k - 1);
        reverse(k, nums.length - 1);
    }
}
