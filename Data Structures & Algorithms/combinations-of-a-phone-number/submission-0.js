class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits) return [];
        const mapping = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };
        let res = [""];
        for (let d of digits) {
            let letters = mapping[d];
            const newRes = [];
            for (let r of res) {
                for (let l of letters) {
                    newRes.push(`${r}${l}`);
                }
            }
            res = newRes;
        }
        return res;
    }
}
