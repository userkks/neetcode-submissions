class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0;
        let j = nums.length - 1;
        while (i < j) {
            let mid = Math.floor((i + j) / 2);
            if (nums[mid] === target) return mid;
            if (nums[i] <= nums[mid]) {
                if (target > nums[mid] || target < nums[i]) i = mid + 1;
                else j = mid;
            } else {
                if (target > nums[mid] && target < nums[i]) i = mid + 1;
                else j = mid;
            }
        }
        if (nums[i] === target) return i;
        return -1;
    }
}
