class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const rMemory = new Array(nums.length);
        let curP = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            curP *= nums[i];
            rMemory[i] = curP;
        }
        const lMemory = [];
        const res = [];
        curP = 1;
        for (let i = 0; i < nums.length; i++) {
            curP *= nums[i];
            lMemory.push(curP);
            const leftP = i > 0 ? lMemory[i - 1] : 1;
            const rightP = i < nums.length - 1 ? rMemory[i + 1] : 1;
            res.push(leftP * rightP);
        }
        return res;
    }
}
