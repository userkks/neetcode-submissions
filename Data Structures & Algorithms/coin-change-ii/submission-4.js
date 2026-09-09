class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = Array.from({ length: amount + 1 }, () => new Array(coins.length));
        const findWay = (ind, amt) => {
            if (dp[ind][amt] !== undefined) return dp[ind][amt];
            if (ind >= coins.length) {
                dp[ind][amt] = 0;
                return 0;
            }
            if (amt === 0) {
                dp[ind][amt] = 1;
                return 1;
            }
            if (amt < 0) {
                dp[ind][amt] = 0;
                return 0;
            }
            const take = findWay(ind, amt - coins[ind]);
            const skip = findWay(ind + 1, amt);
            dp[ind][amt] = take + skip;
            return dp[ind][amt];
        };
        return findWay(0, amount);
    }
}
