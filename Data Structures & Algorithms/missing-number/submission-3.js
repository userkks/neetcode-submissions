class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sum = nums.length * (nums.length + 1) / 2;
        for (let n of nums) {
            sum -= n;
        }
        return sum;
    }
}
