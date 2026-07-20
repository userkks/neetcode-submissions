class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = {};
        let maxFreq = 0;
        for (let i=0; i<tasks.length; i++) {
            freq[tasks[i]]= (freq[tasks[i]] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[tasks[i]]);
        }
        let countMax=0;
        for (let item in freq) {
            if (freq[item] === maxFreq) {
                countMax++;
            }
        }
        return Math.max((n+1)*(maxFreq-1)+countMax, tasks.length)

    }
}
