class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0;
        let j = nums.length - 1;
        while (i < j) {
            if (nums[i] < nums[j]) return nums[i];
            const mid = Math.floor((i + j) / 2);
            if (nums[mid] < nums[i]) j = mid;
            else i = mid + 1;
        }
        return nums[i];
    }
}
