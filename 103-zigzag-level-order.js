/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) return [];
    let queue = [root],
        rtn = [],
        flag = true;

    let bfs = function (queue) {
        let len = queue.length,
            array = [];
        while (len > 0) {
            let current = queue.shift();
            if (flag) {
                array.push(current.val);
            } else {
                array.unshift(current.val);
            }
            let left = current.left,
                right = current.right;
            if (left !== null) queue.push(left);
            if (right !== null) queue.push(right);
            len--;
        }
        rtn.push(array);
        flag = !flag;
        if (queue.length > 0) bfs(queue);
    }
    bfs(queue);
    return rtn;
};