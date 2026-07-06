class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length-1;
        s = s.toLowerCase();
        while (i<j) {
            console.log(s[i], s[j])
            if (!(/[a-z0-9]/.test(s[i]))) {i++; continue;}
            if (!(/[a-z0-9]/.test(s[j]))) {j--; continue;}

            if (s[i++] !== s[j--]) return false;
        }
        return true;
    }
}
