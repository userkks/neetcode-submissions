class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const parenStack = [];
        const starStack = [];
        for (let i=0; i<s.length; i++) {
            const ch = s[i];
            if (ch === '(') parenStack.push(i);
            else if (ch === '*') starStack.push(i);
            else {
                if (parenStack.length) parenStack.pop();
                else if (starStack.length) starStack.pop();
                else return false;
            }
        }
        if (!parenStack.length) return true;
        for (let i=parenStack.length-1; i>=0; i--) {
            const parenIndex = parenStack[i];
            if (starStack.length && starStack[starStack.length-1] > parenIndex) {
                starStack.pop();
            } else return false;
        }
        return true;
    }
}
