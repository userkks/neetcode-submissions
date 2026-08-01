class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((acc, cur) => acc + cur, 0);
        if (sum % 2) return false;
        const half = sum / 2;
        const memory = new Set([0]);
        for (let i = 0; i < nums.length; i++) {
            const newArr = [];
            for (let m of memory) {
                let temp = nums[i] + m;
                if (temp < half) newArr.push(temp);
                else if (temp === half) return true;
            }
            for (const sum of newArr) {
                memory.add(sum);
            }
        }
        return false;
    }
}
