/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let rtn = [],
        length = digits.length;
    if (length === 0) return [];

    let map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    let dfs = function (index, letters) {
        let digit = digits.charAt(index);
        let array = map[digit];
        for (let i = 0, len = array.length; i < len; i++) {
            let temp = letters + array[i];
            if (index + 1 < length) {
                dfs(index + 1, temp);
            } else {
                rtn.push(temp);
            }
        }
    };

    dfs(0, "");
    return rtn;
};