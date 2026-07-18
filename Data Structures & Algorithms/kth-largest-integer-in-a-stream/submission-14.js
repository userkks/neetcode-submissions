class KthLargest {
    heap = [];
    heapSize;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heapSize=k;
        for (let i=0; i<nums.length; i++) {
            this.pushHeap(nums[i]);
        }
    }

    pushHeap(v) {
        if (this.heap.length < this.heapSize) {
            this.heap.push(v);
            let cur = this.heap.length-1;
            while (cur > 0) {
                let parent = Math.ceil(cur/2)-1;
                if (this.heap[parent]>this.heap[cur]) {
                    [this.heap[cur], this.heap[parent]] = [this.heap[parent], this.heap[cur]];
                } else break;
                cur = parent;
            }
        } else if (this.heap[0] < v) {
            this.heap[0]=v;
            let cur=0;
            while (cur<this.heap.length) {
                let lowest = cur;
                let left = cur*2+1;
                let right = cur*2+2;
                if (this.heap[left] < this.heap[lowest]) {
                    lowest = left;
                }
                if (this.heap[right] < this.heap[lowest]) {
                    lowest = right;
                }
                if (lowest !== cur) {
                    [this.heap[lowest], this.heap[cur]] = [this.heap[cur], this.heap[lowest]];
                    cur = lowest;
                } else break;
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pushHeap(val);
        return this.heap[0];
    }
}
