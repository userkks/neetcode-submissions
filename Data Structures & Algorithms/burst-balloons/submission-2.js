class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(balloons) {
        const nums = [1, ...balloons, 1];
        const dp = Array.from({length: nums.length}, () => new Array(nums.length))
        const findCoins = (i, j) => {
            if (dp[i][j] !== undefined) return dp[i][j];
            let max = 0;
            for (let k = i + 1; k < j; k++) {
                const coins = nums[k] * nums[i] * nums[j];
                const leftCoins = findCoins(i, k);
                const rightCoins = findCoins(k, j);
                max = Math.max(max, coins + leftCoins + rightCoins);
            }
            return dp[i][j] = max;
        };
        return findCoins(0, nums.length-1);
    }
}
