class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = 999;
        let profit = 0;
        for (let i=0; i<prices.length; i++) {
            if (prices[i] < buyPrice) {
                buyPrice = prices[i];
            } else {
                const temp = prices[i] - buyPrice;
                if (temp > profit) {
                    profit = temp;
                }
            }
        }
        return profit;
    }
}
