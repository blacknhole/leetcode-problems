/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let len = s.length;
    if (len === 0) return [];

    let rtn = [];

    let dfs = function (index, array) {
        let char = s.charAt(index),
            regexp = new RegExp(char, "g"),
            subS = s.slice(index),
            indexObj;

        while ((indexObj = regexp.exec(subS)) !== null) {
            let index2 = indexObj.index + index,
                i = index + 1,
                j = index2 - 1;

            while (i < j && s.charAt(i) === s.charAt(j)) {
                i++;
                j--;
            }

            if (i >= j) {
                let temp = [...array, s.slice(index, index2 + 1)];
                if (index2 + 1 < len) {
                    dfs(index2 + 1, temp);
                } else {
                    rtn.push(temp);
                }
            }
        }
    };
    dfs(0, []);
    return rtn;
};