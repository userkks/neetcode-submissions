class MinHeap {
    memory = [];
    enqueue(obj) {
        this.memory.push(obj);
        let i = this.memory.length-1;
        while (i > 0) {
            const parent = Math.ceil(i/2)-1;
            if (this.memory[parent].distance > this.memory[i].distance) {
                [this.memory[parent], this.memory[i]] = [this.memory[i], this.memory[parent]];
                i = parent;
            } else break;
        }
    }
    dequeue() {
        [this.memory[0], this.memory[this.memory.length-1]] = [this.memory[this.memory.length-1], this.memory[0]];
        const retItem = this.memory.pop();
        let i = 0;
        while (i <= Math.floor(this.memory.length/2)-1) {
            let left = i*2+1;
            let right = i*2+2;
            let smallest = i;
            if (left<this.memory.length && this.memory[left].distance<this.memory[smallest].distance) smallest = left;
            if (right<this.memory.length && this.memory[right].distance<this.memory[smallest].distance) smallest = right;
            if (smallest !== i) {
                [this.memory[smallest], this.memory[i]] = [this.memory[i], this.memory[smallest]];
                i = smallest;
            } else break;
        }
        return retItem;
    }
    isEmpty() {
        return !this.memory.length;
    }

}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const graph = Array.from({length: n+1}, () => []);
        for (let [u, v, w] of times) {
            graph[u].push([v, w]);
        }

        const pq = new MinHeap();
        const visited = new Array(n+1).fill(false);
        const dist = new Array(n+1).fill(Infinity);
        visited[k] = true;
        pq.enqueue({
            node: k,
            distance: 0
        });
        dist[k] = 0;
        while (!pq.isEmpty()) {
            const n = pq.dequeue();
            if (n.distance > dist[n.node]) continue;
            const neighbors = graph[n.node];
            for (let [v, w] of neighbors) {
                const newDistance = n.distance + w;
                if (newDistance < dist[v]) {
                    dist[v] = newDistance;
                    pq.enqueue({
                        node: v,
                        distance: newDistance
                    })
                }
            }
        }
        let max = -Infinity;
        for (let i=1; i<dist.length; i++) {
            if (dist[i] === Infinity) return -1;
            max = Math.max(max, dist[i]);
        }
        return max;
    }
}
