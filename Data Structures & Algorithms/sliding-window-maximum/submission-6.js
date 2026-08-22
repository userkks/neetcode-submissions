class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dq = new Dequeue();
        const res = [];
        for (let j = 0; j < k; j++) dq.push(nums[j]);
        res.push(dq.getStart());
        for (let j = k; j < nums.length; j++) {
            if (dq.getStart() === nums[j - k]) dq.delete();
            dq.push(nums[j]);
            res.push(dq.getStart());
        }
        return res;
    }
}

class Dequeue {
    stack = [];
    start = 0;
    constructor() {}
    push(v) {
        while (this.stack.length - this.start && this.top() < v) {
            this.stack.pop();
        }
        this.stack.push(v);
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getStart() {
        return this.stack[this.start];
    }
    delete() {
        this.start++;
    }
}
