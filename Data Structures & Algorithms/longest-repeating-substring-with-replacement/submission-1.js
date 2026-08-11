class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        const freq = {};
        let res = 0;

        for (let right = 0; right < s.length; right++) {
            freq[s[right]] = (freq[s[right]] || 0) + 1;
            maxFreq = Math.max(freq[s[right]], maxFreq);
            const winLength = right - left + 1;
            if (winLength - maxFreq > k) {
                freq[s[left++]]--;
            }
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}
