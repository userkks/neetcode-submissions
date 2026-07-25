class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const words = new Set(wordList);

        // If the destination doesn't exist, it's impossible.
        if (!words.has(endWord)) return 0;

        const queue = [beginWord];
        let head = 0;
        let level = 1;

        while (head < queue.length) {
            const size = queue.length - head;

            // Process one BFS level
            for (let i = 0; i < size; i++) {
                const word = queue[head++];

                // Reached destination
                if (word === endWord) return level;

                const chars = word.split("");

                // Try changing every position
                for (let j = 0; j < chars.length; j++) {
                    const original = chars[j];

                    // Replace with a-z
                    for (let c = 97; c <= 122; c++) {
                        const ch = String.fromCharCode(c);

                        if (ch === original) continue;

                        chars[j] = ch;
                        const nextWord = chars.join("");

                        if (words.has(nextWord)) {
                            queue.push(nextWord);
                            words.delete(nextWord); // mark visited
                        }
                    }

                    // Restore original character
                    chars[j] = original;
                }
            }

            level++;
        }

        return 0;
    }
}