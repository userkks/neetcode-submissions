class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const leftTraversal = [];
        let curMaxIndex = 0;
        for (let i=0; i<height.length; i++) {
            if (height[i] >= height[curMaxIndex]) {
                curMaxIndex = i;
            } 
            leftTraversal.push(curMaxIndex)
            
        }
        const rightTraversal = new Array(height.length);
        curMaxIndex = height.length-1;
        for (let i=height.length-1; i>=0; i--) {
            if (height[i] >= height[curMaxIndex]) {
                curMaxIndex = i;
            }
            rightTraversal[i] = curMaxIndex

        }
        const result = [];
        for (let i=0; i<height.length; i++) {
            result.push(Math.min(height[leftTraversal[i]], height[rightTraversal[i]])-height[i])
        }
        return result.reduce((cur, acc) => cur + acc, 0)
    }
}
