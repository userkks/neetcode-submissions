class MinHeap {
    constructor() {
        this.memory = [];
    }

    enqueue(obj) {
        this.memory.push(obj);

        let i = this.memory.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.memory[parent].cost <= this.memory[i].cost) break;

            [this.memory[parent], this.memory[i]] =
                [this.memory[i], this.memory[parent]];

            i = parent;
        }
    }

    dequeue() {
        if (this.memory.length === 1) return this.memory.pop();

        const min = this.memory[0];
        this.memory[0] = this.memory.pop();

        let i = 0;

        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (
                left < this.memory.length &&
                this.memory[left].cost < this.memory[smallest].cost
            ) {
                smallest = left;
            }

            if (
                right < this.memory.length &&
                this.memory[right].cost < this.memory[smallest].cost
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.memory[i], this.memory[smallest]] =
                [this.memory[smallest], this.memory[i]];

            i = smallest;
        }

        return min;
    }

    isEmpty() {
        return this.memory.length === 0;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const graph = [];
        for (let i=0; i<n; i++) {
            graph[i] = [];
        }
        for (let [i, j, w] of flights) {
            graph[i].push([j, w]);
        }
        const pq = new MinHeap();
        const dist = Array.from({length: n}, () => new Array(k+2).fill(Infinity));
        pq.enqueue({
            node: src,
            cost: 0,
            stop: 0
        });
        dist[src][0] = 0;
        while (!pq.isEmpty()) {
            const {node, cost, stop} = pq.dequeue();
            if (node === dst) return cost;
            if (cost > dist[node][stop]) continue;
            if (stop === k+1) continue;
            for (let [j, w] of graph[node]) {
                const newCost = cost + w;
                if (newCost < dist[j][stop+1]) {
                    dist[j][stop+1] = newCost;
                    pq.enqueue({
                        node: j,
                        cost: newCost,
                        stop: stop+1
                    })
                }
            }
        }
        return -1;
    }
}
