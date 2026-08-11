class Trie {
    constructor() {
        this.end = false;
        this.next = {};
    }
    insert(word) {
        let curNode = this;
        for (let l of word) {
            if (!(l in curNode.next)) curNode.next[l] = new Trie();
            curNode = curNode.next[l];
        }
        curNode.end = true;
    }
    search(word) {
        let curNodeList = [this];
        for (let l of word) {
            const tempNodeList = [];
            if (l === '.') {
                curNodeList.forEach(n => tempNodeList.push(...Object.values(n.next)));
            } else {
                const nodesReachable = curNodeList.map(n => n.next[l]).filter(i => i);
                tempNodeList.push(...nodesReachable);
            }
            curNodeList = tempNodeList;
            
        }
        return curNodeList.some(i => i.end);
    }
}

class WordDictionary {
    constructor() {
        this.trie = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        this.trie.insert(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.trie.search(word);
    }
}
