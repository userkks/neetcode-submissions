class Trie {
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
                curNode.next[l] = new Trie();
            }
            curNode = curNode.next[l];
        }
        curNode.end = word;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new Trie();
        const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const res = new Set();
        const dfs = (i, j, node) => {
            const ch = board[i][j];
            if (!node.next[ch]) return;
            node = node.next[ch];
            if (node.end) res.add(node.end);
            board[i][j] = "#";
            for (let [di, dj] of dirs) {
                const [ni, nj] = [i + di, j + dj];
                if (
                    ni < 0 ||
                    ni >= board.length ||
                    nj < 0 ||
                    nj >= board[0].length ||
                    board[ni][nj] === "#"
                )
                    continue;
                dfs(ni, nj, node);
            }
            board[i][j] = ch;
        };
        for (let w of words) trie.insert(w);
        console.log(trie);
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                dfs(i, j, trie);
            }
        }
        return [...res];
    }
}
