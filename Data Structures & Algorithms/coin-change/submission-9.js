class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memory = [0];
        for (let i = 1; i <= amount; i++) {
            let minCoin = Infinity;
            for (let c of coins) {
                if (i - c >= 0 && memory[i - c] !== -1) minCoin = Math.min(minCoin, memory[i - c]);
            }
            memory.push(minCoin === Infinity ? -1 : minCoin + 1);
        }
        return memory.pop();
    }
}
