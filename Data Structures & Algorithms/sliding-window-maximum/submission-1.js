class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const DoubleQueue = function () {
            const memory = [];
            let firstIndex = 0;
            this.push = (v) => memory.push(v);
            this.getBack = () => {if (this.getSize()) return memory[memory.length-1];}
            this.getFront = () => memory[firstIndex];
            this.removeBack = () => {if (this.getSize()) memory.pop();}
            this.removeFront = () => firstIndex++;
            this.getSize = () => memory.length - firstIndex;
        }
        const dq = new DoubleQueue();
        const res = [];
        for (let i=0; i<k; i++) {
            while(dq.getSize() && nums[dq.getBack()] <= nums[i]) {
                dq.removeBack();
            }
            dq.push(i);
        }
        res.push(nums[dq.getFront()]);
        for (let i=k; i<nums.length; i++) {
            while(dq.getSize() && nums[dq.getBack()] <= nums[i]) {
                dq.removeBack();
            }
            dq.push(i);
            if (dq.getFront() <= i-k) dq.removeFront();
            res.push(nums[dq.getFront()]);
        }
        return res;
        
    }
}
