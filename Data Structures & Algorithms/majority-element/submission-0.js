class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const majority = nums.length%2 ? Math.ceil(nums.length/2) : nums.length/2+1;
        const freq = {};
        for (let n of nums) {
            freq[n] = (freq[n] || 0) + 1;
            if (freq[n] === majority) return n;
        }
    }
}
