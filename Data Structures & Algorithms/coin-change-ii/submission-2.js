class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = Array.from({ length: amount + 1 }, () => new Array(coins.length).fill(null));
        const findCoins = (amt, start) => {
            if (dp[amt][start] !== null) return dp[amt][start];
            if (amt === 0) {
                dp[amt][start] = 1;
                return 1;
            }
            let res = 0;
            for (let i = start; i < coins.length; i++) {
                if (coins[i] <= amt) res += findCoins(amt - coins[i], i);
            }
            dp[amt][start] = res;
            return res;
        };
        return findCoins(amount, 0);
    }
}
