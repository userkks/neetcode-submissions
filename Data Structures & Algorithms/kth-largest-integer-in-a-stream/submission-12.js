class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for (const num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.push(val);

        if (this.heap.length > this.k) {
            this.pop();
        }

        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);

        let i = this.heap.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);

            if (this.heap[p] <= this.heap[i]) break;

            [this.heap[p], this.heap[i]] =
                [this.heap[i], this.heap[p]];

            i = p;
        }
    }

    pop() {
        const last = this.heap.pop();

        if (this.heap.length === 0) {
            return last;
        }

        const root = this.heap[0];
        this.heap[0] = last;

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }

        return root;
    }
}