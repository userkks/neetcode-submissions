class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const binarySearch = (i, j) => {
            if (i>j) return -1;
            const mid = Math.floor((j-i+1)/2)+i;
            if (nums[mid] == target) return mid;
            else if (target > nums[mid]) return binarySearch(mid+1, j);
            else return binarySearch(i, mid-1);
        }
        return binarySearch(0, nums.length-1);
    }
}
