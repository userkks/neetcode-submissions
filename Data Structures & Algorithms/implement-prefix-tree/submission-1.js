class PrefixTree {
    constructor() {
        this.end = false;
        this.next = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curNode = this;
        for (let l of word) {
            if (!(l in curNode.next)) {
                curNode.next[l] = new PrefixTree();
            }
            curNode = curNode.next[l];
        }
        curNode.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curNode = this;
        for (let l of word) {
            if (!curNode.next[l]) return false;
            curNode = curNode.next[l];
        }
        return curNode.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curNode = this;
        for (let l of prefix) {
            if (!curNode.next[l]) return false;
            curNode = curNode.next[l];
        }
        return true;
    }
}
