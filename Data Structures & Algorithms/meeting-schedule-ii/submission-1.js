/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(interval) {
        this.heap.push(interval);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent].end <= this.heap[index].end) break;

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    bubbleDown() {
        let index = 0;

        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < this.heap.length &&
                this.heap[left].end < this.heap[smallest].end
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].end < this.heap[smallest].end
            ) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start)
        const roomOccupied = new MinHeap();
        let maxRoom = 0;
        for (let int of intervals) {
            while (roomOccupied.size() && int.start >= roomOccupied.peek().end)
                roomOccupied.pop();
            roomOccupied.push(int);
            maxRoom = Math.max(maxRoom, roomOccupied.size())
        }
        return maxRoom;
    }
}
