class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;

        // dp[day][0] = max profit if we are NOT holding a stock
        // dp[day][1] = max profit if we ARE holding a stock
        const dp = Array.from({ length: n + 2 }, () => [0, 0]);

        for (let day = n - 1; day >= 0; day--) {

            // Not holding -> Buy or Skip
            dp[day][0] = Math.max(
                -prices[day] + dp[day + 1][1],
                dp[day + 1][0]
            );

            // Holding -> Sell or Hold
            dp[day][1] = Math.max(
                prices[day] + dp[day + 2][0], // cooldown
                dp[day + 1][1]
            );
        }

        return dp[0][0];
    }
}
