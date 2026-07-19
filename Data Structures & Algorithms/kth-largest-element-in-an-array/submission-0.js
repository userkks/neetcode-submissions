class Heap {
    heap=[];
    size;
    constructor(size) {
        this.size=size;
    }
    push(v) {
        if (this.heap.length<this.size) {
            this.heap.push(v);
            let cur = this.heap.length-1;
            while (cur>0) {
                let parent = Math.ceil(cur/2)-1;
                if (parent>=0 && this.heap[parent]>this.heap[cur]) {
                    [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
                    cur = parent;
                } else break;
            }
        } else if (v>this.heap[0]) {
            this.heap[0]=v;
            let cur=0;
            while(cur<this.heap.length) {
                let lowest=cur;
                let left=2*cur+1;
                let right=2*cur+2;
                if (left<this.heap.length && this.heap[left]<this.heap[lowest]) {
                    lowest=left;
                }
                if (right<this.heap.length && this.heap[right]<this.heap[lowest]) {
                    lowest=right;
                }
                if (lowest!==cur) {
                    [this.heap[lowest], this.heap[cur]] = [this.heap[cur], this.heap[lowest]];
                    cur=lowest;
                } else break;
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new Heap(k);
        for (let i=0; i<nums.length; i++) {
            heap.push(nums[i]);
        }
        return heap.heap[0];
    }
}
