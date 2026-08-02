class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const reachables = [[nums.length-1, 0]];
        for (let i=nums.length-2; i>=0; i--) {
            const jump = nums[i];
            let minJump = Infinity;
            for (let j=reachables.length-1; j>=0; j--) {
                let [ind, jumpCount] = reachables[j];
                if (ind <= i+jump) minJump = Math.min(minJump, jumpCount+1);
                else break;
            }
            if (minJump !== Infinity) reachables.push([i, minJump]);
        }
        return reachables.pop()[1];
    }
}
