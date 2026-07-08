class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const memory = [];
        const res = [];
        for (let i=temperatures.length-1; i>=0; i--) {
            while(memory.length && temperatures[memory[memory.length-1]] <= temperatures[i]) memory.pop();
            if (memory.length) res.push(memory[memory.length-1]-i);
            else res.push(0);
            memory.push(i);
        }
        return res.reverse();
    }
}
