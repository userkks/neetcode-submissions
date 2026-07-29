class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const getPalindrome = (i) => {
            let left = i;
            let right = i;
            while (left>=0 && right<s.length && s[left] === s[right]) {
                left--;
                right++;
            }
            let secondLeft = i+1;
            let secondRight = i;

            while (secondLeft>=0 && secondRight<s.length && s[secondLeft] === s[secondRight]) {
                secondLeft--;
                secondRight++;
            }
            if (secondRight<secondLeft) return {left: left+1, right:right-1, len: right-left-1};
            if (right-left-1 > secondRight-secondLeft-1) {
                return {left: left+1, right: right-1, len: right-left-1}
            } else return {left:secondLeft+1, right: secondRight-1, len: secondRight-secondLeft-1}
        }
        let curMax = {left:0, right:0, len:-Infinity};
        for (let i=0; i<s.length; i++) {
            let temp = getPalindrome(i);
            if (temp.len > curMax.len) curMax = temp;
        }
        return s.slice(curMax.left, curMax.right+1);
    }
}
