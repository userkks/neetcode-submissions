class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        nums = [1, ...nums, 1];
        const dp = Array.from({length: nums.length}, () => new Array(nums.length).fill(-1));
        const findCoins = (left, right) => {
            if (dp[left][right] !== -1) return dp[left][right];
            let max = 0;
            for (let k=left+1; k<right; k++) {
                const lastCoins = nums[left]*nums[right]*nums[k];
                const leftCoins = findCoins(left, k);
                const rightCoins = findCoins(k, right);
                max = Math.max(max, lastCoins+leftCoins+rightCoins);
            }
            dp[left][right] = max;
            return max;
        }
        return findCoins(0, nums.length-1);
    }
}
