class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;

        // Array is not rotated
        if (nums[0] <= nums[n - 1]) {
            return nums[0];
        }

        const first = nums[0];
        let l = 0;
        let r = n - 1;

        while (l < r) {
            const m = l + Math.floor((r - l) / 2);

            if (nums[m] >= first) {
                // m is in the left sorted portion
                l = m + 1;
            } else {
                // m is in the right portion containing the minimum
                r = m;
            }
        }

        return nums[l];
    }
}