class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r=heights.length-1;
        let maxSum = 0;
        while (l < r) {
            const temp = (r-l) * Math.min(heights[l], heights[r]);
            if (temp > maxSum) maxSum = temp;
            if (heights[l] <= heights[r]) l++;
            else r--;
        }
        return maxSum;
    }
}
