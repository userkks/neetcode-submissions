class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];
        for (let [i, j] of intervals) {
            const [ti, tj] = res[res.length - 1];
            if (i <= tj) {
                res[res.length - 1] = [Math.min(ti, i), Math.max(tj, j)];
            } else res.push([i, j])
        }
        return res;

    }
}
