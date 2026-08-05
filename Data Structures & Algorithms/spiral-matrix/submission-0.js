class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const go = ([i, j], dir) => {
            if (dir === "right" && j < matrix[0].length - 1 && matrix[i][j + 1] !== "d")
                return [i, j + 1];
            else if (dir === "down" && i < matrix.length - 1 && matrix[i + 1][j] !== "d")
                return [i + 1, j];
            else if (dir === "left" && j > 0 && matrix[i][j - 1] !== "d") return [i, j - 1];
            else if (dir === "up" && i > 0 && matrix[i - 1][j] !== "d") return [i - 1, j];
            else return false;
        };
        const res = [matrix[0][0]];
        matrix[0][0] = "d";
        const traverse = (i, j) => {
            let finish = false;
            while (!finish) {
                finish = true;
                ["right", "down", "left", "up"].forEach((dir) => {
                    while (true) {
                        const right = go([i, j], dir);
                        if (!right) break;
                        finish = false;
                        matrix[i][j] = "d";
                        [i, j] = right;
                        res.push(matrix[i][j]);
                    }
                });
            }
        };
        traverse(0, 0);
        return res;
    }
}
