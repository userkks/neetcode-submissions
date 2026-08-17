class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = Infinity;
        let max = 0;
        for (let i=0; i<prices.length; i++) {
            if (prices[i] < buy) buy = prices[i];
            else max = Math.max(max, prices[i]-buy);
        }
        return max;
    }
}
