class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const majority = Math.floor(nums.length/3)+1;
        const freq = {};
        const res = [];
        for (let n of nums) {
            freq[n] = (freq[n] || 0) + 1;
            if (freq[n] === majority) res.push(n);
        }
        return res;
    }
}
