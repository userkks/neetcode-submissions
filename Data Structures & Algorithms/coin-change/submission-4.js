class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memory = new Map([[0, 0]]);
        const change = (amt) => {
            if (memory.has(amt)) return memory.get(amt);
            let min = Infinity;
            for (let coin of coins) {
                if (coin <= amt) {
                    const temp = change(amt-coin);
                    min = Math.min(min, 1+temp);
                }
            }
            memory.set(amt, min);
            return min;
        }
        const temp = change(amount);
        return temp === Infinity ? -1 : temp;

    }
}
