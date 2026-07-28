class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const res = [];
        for (let i=0; i<nums.length; i++) {
            if (nums[i-1] === nums[i]) continue;
            const cur = nums[i];
            const r = 0 - nums[i];
            let start = i+1;
            let end = nums.length-1;
            while (start < end) {
                if (nums[start]+nums[end]===r) {
                    res.push([cur, nums[start], nums[end]])
                    start++;
                    end--;
                    while (nums[start] === nums[start-1]) start++;
                    while (nums[end] === nums[end+1]) end--;
                } else if (nums[start]+nums[end]>r) {
                    end--;
                } else start++;
                
            }
        }
        return res;
    }
}
