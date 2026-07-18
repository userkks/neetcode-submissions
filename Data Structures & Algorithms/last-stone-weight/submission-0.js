class Heap {
    heap = [];
    constructor(arr) {
        this.heap = arr;
        for (let i=Math.floor(this.heap.length/2)-1; i>=0; i--) {
            this.heapifyDown(this.heap, this.heap.length, i);
        }
    }
    pop() {
        [this.heap[0], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[0]];
        this.heapifyDown(this.heap, this.heap.length-1, 0);
        return this.heap.pop();
    }
    push(v) {
        this.heap.push(v);
        this.heapifyUp(this.heap, this.heap.length, this.heap.length-1);
    }
    heapifyDown(arr, heapSize, i) {
        const left = i*2+1;
        const right = i*2+2;
        let largest = i;
        if (left < heapSize && arr[left] > arr[i]) {
            largest = left;
        }
        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest!==i) {
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            this.heapifyDown(arr, heapSize, largest);
        }
    }
    heapifyUp(arr, heapSize, i) {
        const parent = Math.ceil(i/2)-1;
        if (parent>=0 && arr[parent] < arr[i]) {
            [arr[parent], arr[i]] = [arr[i], arr[parent]];
            this.heapifyUp(arr, heapSize, parent);
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    lastStoneWeight(stones) {
        const heap = new Heap(stones);
        while (heap.heap.length > 1) {
            const stone1 = heap.pop();
            const stone2 = heap.pop();
            const stone = Math.max(stone1, stone2) - Math.min(stone1, stone2);
            heap.push(stone);
        }
        return heap.heap.length ? heap.heap[0] : 0;
    }
}
