class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = Array.from({ length: amount + 1 }, () => new Array(coins.length).fill(null));
        for (let i = 0; i < coins.length; i++) dp[0][i] = 1;
        const findCoins = (amt, start) => {
            if (dp[amt][start] !== null) return dp[amt][start];
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
