class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (let n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1);
        }
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (let [n, f] of freq) {
            bucket[f].push(n);
        }
        const res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let j of bucket[i]) {
                res.push(j);
                if (res.length === k) return res;
            }
        }
    }
}
