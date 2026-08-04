class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let res = 0;
        let prevEnd = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            const [s, e] = intervals[i];
            if (s < prevEnd) {
                res++;
                prevEnd = Math.min(e, prevEnd);
            }
            else prevEnd = e;
        }
        return res;
    }
}
