class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const used = new Set();
        const res = [];
        const backtrack = (path) => {
            if (path.length === nums.length) res.push([...path]);
            for (let i=0; i<nums.length; i++) {
                if (used.has(nums[i])) {
                    continue;
                }
                used.add(nums[i]);
                path.push(nums[i]);
                backtrack(path);
                used.delete(nums[i]);
                path.pop();
            }
        }
        backtrack([]);
        return res;
    }
}
