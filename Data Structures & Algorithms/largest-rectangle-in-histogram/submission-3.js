class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        const leftTraverse = [];
        let rightTraverse = [];
        for (let i=0; i<heights.length; i++) {
            while (stack.length && heights[stack[stack.length-1]] >= heights[i]) {
                stack.pop();
            }
            if (stack.length) {
                leftTraverse.push(stack[stack.length-1]+1);
            } else {
                leftTraverse.push(0);
            }
            stack.push(i);
        }
        stack = [];
        for (let i=heights.length-1; i>=0; i--) {
            while (stack.length && heights[stack[stack.length-1]] >= heights[i]) {
                stack.pop();
            }
            if (stack.length) {
                rightTraverse.push(stack[stack.length-1]-1);
            } else {
                rightTraverse.push(heights.length-1);
            }
            stack.push(i);
        }
        rightTraverse = rightTraverse.reverse();
        let res = 0;
        for (let i=0; i<heights.length; i++) {
            const temp = (rightTraverse[i]-leftTraverse[i]+1) * heights[i];
            if (temp> res) res = temp;
        }
        return res;
    }
}
