class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(candidates, target) {
        const find = (sum, partition) => {
            if (!sum) return [[]];
            const res = [];
            for (let i = partition; i < candidates.length; i++) {
                let temp = [];
                if (candidates[i] <= sum) {
                    temp = find(sum - candidates[i], i);
                    temp.forEach((l) => l.push(candidates[i]));
                    res.push(...temp);
                }
            }
            return res;
        };
        return find(target, 0);
    }
}
