class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length + 1;
        let total = (n * (n - 1)) / 2;
        return nums.reduce((acc, cur) => acc - cur, total);
    }
}
