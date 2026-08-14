class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const isPalindrome = (i, j) => {
            while (i<j) {
                if (s[i++] !== s[j--]) return false;
            }
            return true;
        }
        const path = [];
        const res = [];
        const backtrack = (start) => {
            if (start === s.length) {
                res.push([...path]);
            }
            for (let end=start; end<s.length; end++) {
                if (!isPalindrome(start, end)) continue;
                path.push(s.slice(start, end+1));
                backtrack(end+1);
                path.pop();
            }
        }
        backtrack(0);
        return res;
    }
}
