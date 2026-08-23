class Trie {
    next = {};
    end = null;
    constructor() {}
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
        const dict = new Trie();
        for (let w of words) {
            dict.insert(w);
        }
        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        const res = new Set();
        const findW = (i, j, dict) => {
            const ch = board[i][j];
            board[i][j] = "#";
            if (ch in dict.next) {
                dict = dict.next[ch];
                if (dict.end) res.add(dict.end);
                for (let [di, dj] of directions) {
                    const [ni, nj] = [i + di, j + dj];
                    if (
                        ni < 0 ||
                        ni >= board.length ||
                        nj < 0 ||
                        nj >= board[0].length ||
                        board[ni][nj] === "#"
                    )
                        continue;
                    findW(ni, nj, dict);
                }
            }
            board[i][j] = ch;
        };

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                findW(i, j, dict);
            }
        }
        return [...res];
    }
}
