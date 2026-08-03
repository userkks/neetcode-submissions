class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const totalGas = gas.reduce((acc, cur) => acc + cur, 0);
        const totalCost = cost.reduce((acc, cur) => acc + cur, 0);
        if (totalGas < totalCost) return -1;
        let res = 0;
        let extraGas = 0;
        for (let i = 0; i < gas.length; i++) {
            extraGas += gas[i] - cost[i];
            if (extraGas < 0) {
                res = i + 1;
                extraGas = 0;
            }
        }
        return res;
    }
}
