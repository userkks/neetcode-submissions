class MedianFinder {
    small = new MaxPriorityQueue();
    large = new MinPriorityQueue();
    constructor() {
        
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (!this.small.size() || num <= this.small.front()) {
            this.small.enqueue(num);
        } else {
            this.large.enqueue(num);
        }
        if (this.small.size() > this.large.size()+1) {
            let temp = this.small.dequeue();
            this.large.enqueue(temp);
        } else if (this.large.size() > this.small.size()+1) {
            let temp = this.large.dequeue();
            this.small.enqueue(temp);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else if (this.large.size() > this.small.size()) {
            return this.large.front();
        } else {
            return (this.small.front() + this.large.front())/2;
        }
    }
}
