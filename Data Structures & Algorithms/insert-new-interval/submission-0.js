class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        for (let [i, j] of intervals) {
            if (newInterval) {
                const [ni, nj] = newInterval;
                if (ni <= j) {
                    res.push([ni, nj]);
                    newInterval = null;
                }
            }
            if (res.length) {
                const [li, lj] = res[res.length - 1];
                if (i <= lj) res[res.length - 1] = [Math.min(i, li), Math.max(j, lj)];
                else res.push([i, j]);
            } else res.push([i, j])

        }
        if (newInterval) res.push(newInterval);
        return res;
    }
}
