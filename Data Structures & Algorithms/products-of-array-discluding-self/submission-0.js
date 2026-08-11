class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const lMemory = [];
        let curP = 1;
        for (let n of nums) {
            curP *= n;
            lMemory.push(curP);
        }
        const rMemory = new Array(nums.length);
        curP = 1;
        for (let i=nums.length-1; i>=0; i--) {
            curP *= nums[i];
            rMemory[i] = curP;
        }
        const res = [];
        for (let i=0; i<nums.length; i++) {
            const leftP = i > 0 ? lMemory[i-1] : 1;
            const rightP = i < nums.length-1 ? rMemory[i+1] : 1;
            res.push(leftP * rightP);
        }
        return res;
    }
}
