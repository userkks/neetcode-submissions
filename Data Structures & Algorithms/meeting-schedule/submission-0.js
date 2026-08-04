/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let prev = intervals[0];
        for (let i=1; i<intervals.length; i++) {
            if (intervals[i].start < prev.end) return false;
            prev = intervals[i];
        }
        return true;
    }
}
