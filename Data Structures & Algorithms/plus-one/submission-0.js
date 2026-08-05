class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const res = [];
        let carry = 1;
        for (let i=digits.length-1; i>=0; i--) {
            if (!carry) {res.push(digits[i]); continue;}
            if (digits[i]===9) res.push(0);
            else {
                res.push(digits[i]+1);
                carry = 0;
            }
        }
        if (carry) res.push(carry);
        return res.reverse();
    }
}
