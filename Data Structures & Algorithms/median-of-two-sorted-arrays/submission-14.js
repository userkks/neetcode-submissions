class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums2.length < nums1.length) [nums1, nums2] = [nums2, nums1];
        let i = 0;
        let j = nums1.length;
        const m = nums1.length;
        const n = nums2.length;
        const halfLen = Math.ceil((m + n) / 2);
        while (i <= j) {
            const partition1 = Math.floor((i + j) / 2);
            const partition2 = halfLen - partition1;
            const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
            const right1 = partition1 === nums1.length ? Infinity : nums1[partition1];
            const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
            const right2 = partition2 === nums2.length ? Infinity : nums2[partition2];
            if (left1 <= right2 && left2 <= right1) {
                if ((m + n) % 2) return Math.max(left1, left2);
                else return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            }
            if (left1 > right2) {
                j = partition1 - 1;
            } else {
                i = partition1 + 1;
            }
        }
    }
}
