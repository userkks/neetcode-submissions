class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [Infinity];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (val < this.minStack[this.minStack.length-1]) {
            this.minStack.push(val);
        } else this.minStack.push(this.minStack[this.minStack.length-1]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
}
