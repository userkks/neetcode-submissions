class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(node) {
        this.heap.push(node);

        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].cost <= this.heap[i].cost) break;

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    dequeue() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (
                left < this.heap.length &&
                this.heap[left].cost < this.heap[smallest].cost
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].cost < this.heap[smallest].cost
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }

        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {

        const n = grid.length;

        const dist = Array.from(
            { length: n },
            () => new Array(n).fill(Infinity)
        );

        const heap = new MinHeap();

        dist[0][0] = grid[0][0];

        heap.enqueue({
            row: 0,
            col: 0,
            cost: grid[0][0]
        });

        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];

        while (!heap.isEmpty()) {

            const { row, col, cost } = heap.dequeue();

            // Ignore outdated entries
            if (cost > dist[row][col]) continue;

            // Destination reached
            if (row === n - 1 && col === n - 1) {
                return cost;
            }

            for (const [dr, dc] of directions) {

                const nr = row + dr;
                const nc = col + dc;

                if (
                    nr < 0 || nr >= n ||
                    nc < 0 || nc >= n
                ) continue;

                const newCost = Math.max(cost, grid[nr][nc]);

                if (newCost < dist[nr][nc]) {

                    dist[nr][nc] = newCost;

                    heap.enqueue({
                        row: nr,
                        col: nc,
                        cost: newCost
                    });
                }
            }
        }
    }
}