class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        for (let i=0; i<s.length; i++) {
            if (['(', '{','['].includes(s[i])) {
                stack.push(s[i]);
            } else if (map[s[i]] === stack[stack.length-1]) stack.pop();
            else return false;
        }
        return !stack.length;
    }
}
