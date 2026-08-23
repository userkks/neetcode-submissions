class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let curMax = 0;
        const left = [];
        for (let i=0; i<height.length; i++) {
            curMax = Math.max(height[i], curMax);
            left.push(curMax);
        }
        curMax = 0;
        const right = [];
        for (let i=height.length-1; i>=0; i--) {
            curMax = Math.max(height[i], curMax);
            right.push(curMax);
        }
        right.reverse();
        return height.reduce((acc,v,i) => acc+Math.min(left[i],right[i])-v, 0);
    }
}
