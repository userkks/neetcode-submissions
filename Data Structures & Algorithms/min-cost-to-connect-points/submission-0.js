class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(item) {
        this.heap.push(item);
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].weight <= this.heap[i].weight) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    dequeue() {
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (
                left < this.heap.length &&
                this.heap[left].weight < this.heap[smallest].weight
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].weight < this.heap[smallest].weight
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const pq = new MinHeap();
    const visited = new Array(points.length).fill(false);
    let visitedCount = 0;
    let res = 0;
    pq.enqueue({node: 0, weight: 0});
    while (visitedCount !== points.length) {
        const {node, weight} = pq.dequeue();
        if (visited[node]) continue;
        visited[node] = true;
        visitedCount++;
        res += weight;
        for (let i=0; i<points.length; i++) {
            if (i === node ) continue;
            const dist = Math.abs(points[i][0]-points[node][0]) + Math.abs(points[i][1]-points[node][1]);
            pq.enqueue({node: i, weight:dist});

        }
    } 
    return res;
    }
}
