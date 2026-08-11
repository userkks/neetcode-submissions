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
        const dfs = (node, i) => {
            if (i === word.length) return node.end;
            const c = word[i];
            if (c !== ".") return !!node.next[c] && dfs(node.next[c], i + 1);
            for (let n of Object.values(node.next)) {
                if (dfs(n, i + 1)) return true;
            }
            return false;
        };
        return dfs(this, 0);
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
