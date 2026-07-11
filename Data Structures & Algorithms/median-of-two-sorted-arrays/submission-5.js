class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let i = 0;
        let j = nums1.length-1;
        const midLength = Math.ceil((nums1.length + nums2.length) / 2);
        const length1 = nums1.length;
        const length2 = nums2.length;
        nums1[-1] = Number.NEGATIVE_INFINITY;
        nums1[nums1.length] = Number.POSITIVE_INFINITY;
        nums2[-1] = Number.NEGATIVE_INFINITY;
        nums2[nums2.length] = Number.POSITIVE_INFINITY;
        while (i <= j) {
            const p1 = Math.floor((i+j)/2);
            const p2 = midLength - (p1+1) - 1;
            console.log(p1, p2, midLength)
            if (nums1[p1] <= nums2[p2+1] && nums1[p1+1] >= nums2[p2]) break;
            else if (nums1[p1] > nums2[p2+1]) {
                j = p1-1;
            } else {
                i = p1+1;
            }
        }
        console.log(i,j)
        const p1=Math.floor((i+j)/2)
        const p2 = midLength - (p1+1) - 1;
        console.log(p1, p2)
        if ((length1+length2) % 2 === 0) {
            return (Math.max(nums1[p1], nums2[p2]) + Math.min(nums1[p1+1], nums2[p2+1]))/2;
        }
        else return Math.max(nums1[p1], nums2[p2]);

    }
}
