class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 1;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (!carry) continue;
            if (digits[i] === 9) digits[i] = 0;
            else {
                digits[i]++;
                carry = 0;
            }
        }
        if (carry) digits.splice(0, 0, carry);
        return digits;
    }
}
