class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const rRight = (arr) => {
            const last = arr[arr.length-1];
            for (let i=arr.length-1; i>0; i--) {
                arr[i] = arr[i-1];
            }
            arr[0] = last;
        }
        for (let i=0; i<k; i++) {
            rRight(nums);
        }
        return nums;
    }
}
