class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const dp = new Map();
        const findWays = (ind, t) => {
            if (dp.has(`${ind},${t}`)) return dp.get(`${ind},${t}`);
            if (ind === nums.length) {
                let temp;
                if (t === 0) temp = 1;
                else temp = 0;
                dp.set(`${ind},${t}`, temp);
                return temp;
            }

            const sumWays = findWays(ind + 1, t - nums[ind]);
            const substractWays = findWays(ind + 1, t + nums[ind]);
            dp.set(`${ind},${t}`, sumWays + substractWays);
            return dp.get(`${ind},${t}`);
        };
        return findWays(0, target);
    }
}
