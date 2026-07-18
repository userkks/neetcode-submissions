class Heap {
    heap = [];
    push(obj) {
        this.heap.push(obj);
        let cur = this.heap.length-1;
        while (cur > 0) {
            let parent = Math.ceil(cur/2)-1;
            if (parent >= 0 && this.heap[parent].val < this.heap[cur].val) {
                [this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
                cur=parent;
            } else break;
        }
    }
    swapHead(obj) {
        this.heap[0] = obj;
        let cur = 0;
        while (cur < this.heap.length) {
            let largest = cur;
            let left = 2*cur+1;
            let right = 2*cur+2;
            if (left < this.heap.length && this.heap[left].val > this.heap[largest].val) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[right].val > this.heap[largest].val) {
                largest = right;
            }
            if (largest !== cur) {
                [this.heap[largest], this.heap[cur]] = [this.heap[cur], this.heap[largest]];
                cur = largest;
            } else break;
        }
    }

}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new Heap();
        for (let i=0; i<points.length; i++) {
            const [x, y] = points[i];
            const dist = Math.sqrt(x*x + y*y);
            if (heap.heap.length < k) heap.push({pos: points[i], val: dist});
            else if (heap.heap[0].val > dist) heap.swapHead({pos: points[i], val: dist});
        }
        return heap.heap.map(i => i.pos);
    }
}
