class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subsetList = [[]];
        for (let n of nums) {
            const newList = [];
            for (let s of subsetList) {
                newList.push([...s]);
                s.push(n);
                newList.push(s);
            }
            subsetList = newList;
        }
        return subsetList;
    }
}
