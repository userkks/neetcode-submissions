class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a-b);
        let res = [[]];
        const resSet = new Set([""]);
        for (let n of nums) {
            let newRes = res.map(r => {
                const newR = [...r];
                newR.push(n);
                return newR;
            });
            newRes = newRes.filter(r => {
                const key = r.join('#');
                if (!resSet.has(key)) {
                    resSet.add(key);
                    return true;
                } else return false;
            });
            res.push(...newRes);
        }
        return res;
    }
}
