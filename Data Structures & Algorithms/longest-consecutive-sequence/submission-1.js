class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const memory = new Set(nums);
        const visited = new Set();
        let curMax = 0;
        const checkSequence = (i, dir) => {
            if (dir === 'up') {
                if (memory.has(i+1)) {
                    visited.add(i+1);
                    return 1 + checkSequence(i+1, 'up');
                }
            }
            if (dir === 'down') {
                if (memory.has(i-1)) {
                    visited.add(i-1);
                    return 1 + checkSequence(i-1, 'down')
                }
            }
            return 0;
        }
        for (let i=0; i<nums.length; i++) {
            if (visited.has(nums[i])) continue;
            const temp = checkSequence(nums[i], 'up') + checkSequence(nums[i], 'down') + 1;
            if (temp > curMax) curMax = temp;

        }
        return curMax;
    }
}
