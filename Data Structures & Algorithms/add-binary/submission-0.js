class Solution {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
    addBinary(a, b) {
        let i=a.length-1;
        let j=b.length-1;
        let res = '';
        let carry = 0;
        while (i > -1 || j > -1) {
            const iNum = i>-1 ? parseInt(a[i]) : 0;
            const jNum = j>-1 ? parseInt(b[j]) : 0;
            res = `${iNum ^ jNum ^ carry}${res}`;
            carry = (iNum & jNum) | ((iNum ^ jNum) & carry) ;
            i--;
            j--;
        }
        if (carry) res = `1${res}`;
        return res;
    }
}
