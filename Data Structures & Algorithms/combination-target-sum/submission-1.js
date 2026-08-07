class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const find = (sum, partition) => {
            if (!sum) return [[]];
            const res = [];
            for (let i=partition; i<nums.length; i++) {
                if (nums[i] <= sum) {
                    const temp = find(sum-nums[i], i);
                    temp.forEach(l => l.push(nums[i]));
                    res.push(...temp);
                }
            }
            return res;
        }
        return find(target, 0);
    }
}
