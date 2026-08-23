class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0;
        let j=heights.length-1;
        let max = -Infinity;
        while (i<j) {
            const width = j-i;
            const volume = Math.min(heights[i], heights[j]) * width;
            max = Math.max(max, volume);
            if (heights[i] < heights[j]) i++;
            else j--;
        }
        return max;
    }
}
