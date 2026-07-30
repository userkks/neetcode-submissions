class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memory = [0];
        for (let i=1; i<=amount; i++) {
            let min = Infinity;
            for (let coin of coins) {
                if (coin <= i) {
                    min = Math.min(min, 1+memory[i-coin]);
                }
            }
            memory.push(min);
        }
        const temp = memory.pop();
        return temp === Infinity ? -1 : temp;
    }
}
