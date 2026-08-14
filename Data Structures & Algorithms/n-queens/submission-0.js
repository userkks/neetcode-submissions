class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const matrix = Array.from({ length: n }, () => new Array(n).fill("."));
        const markQueen = (i, j) => {
            const res = [];
            for (let p = i + 1; p < n; p++) {
                const right = j + p - i;
                const left = j - p + i;
                if (right < n && matrix[p][right] !== "x") res.push([p, right]);
                if (left >= 0 && matrix[p][left] !== "x") res.push([p, left]);
                if (matrix[p][j] !== "x") res.push([p, j]);
            }
            return res;
        };
        const res = [];
        const backtrack = (i) => {
            if (i === n) {
                const newMat = [];
                matrix.forEach((row) =>
                    newMat.push(row.map((item) => (item === "x" ? "." : item)).join("")),
                );
                res.push(newMat);
                return;
            }
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === ".") {
                    matrix[i][j] = "Q";
                    const markList = markQueen(i, j);
                    markList.forEach(([p, q]) => (matrix[p][q] = "x"));
                    backtrack(i + 1);
                    markList.forEach(([p, q]) => (matrix[p][q] = "."));
                    matrix[i][j] = ".";
                }
            }
        };
        backtrack(0);
        return res;
    }
}
