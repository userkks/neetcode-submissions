class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class PriorityList {
    constructor(size) {
        this.size = size;
        // this.currentSize = 0;
        this.listHead = null;
        this.listTail = null;
        this.nodeMap = new Map();
    }

    add(v) {
        const node = new ListNode(v);
        if (!this.listHead) {
            this.listHead = node;
            this.listTail = node;
            this.nodeMap.set(v, node);
            // this.currentSize++;
        } else {
            if (!this.nodeMap.has(v)) {
                node.next = this.listHead;
                this.listHead.prev = node;
                this.listHead = node;
                this.nodeMap.set(v, node);
                // this.currentSize++;
            } else {
                const existNode = this.nodeMap.get(v);
                if (!existNode.prev) return;
                existNode.prev.next = existNode.next;
                if (existNode.next) {
                    existNode.next.prev = existNode.prev;
                } else {
                    this.listTail = existNode.prev;
                }
                existNode.next = this.listHead;
                this.listHead.prev = existNode;
                this.listHead = existNode;
                existNode.prev = null;
            }
            

        }
        if(this.nodeMap.size > this.size) {
            return {remove: this.remove()};
        }

    }

    remove() {
        const temp = this.listTail;
        if (this.listTail.prev) {
            this.listTail.prev.next = null;
            this.listTail = this.listTail.prev;
        } else {
            this.listHead = null;
            this.listTail = null;
        }
        this.nodeMap.delete(temp.val);
        // this.currentSize--;
        return temp.val;
        
    }
}

class LRUCache {

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.priorityList = new PriorityList(capacity);
        this.memory = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.memory.has(key)) {
            this.priorityList.add(key);
            console.log(key, this.priorityList.nodeMap)
            return this.memory.get(key);
        }
        return -1;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const remove = this.priorityList.add(key);
        if (remove) this.memory.delete(remove.remove);
        this.memory.set(key, value);
    }
}
