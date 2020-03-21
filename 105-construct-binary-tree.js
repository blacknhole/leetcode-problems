/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let len = preorder.length;
    if (len === 0) return null;

    let parent = preorder[0];
    let parentNode = new TreeNode(parent);

    let buildParentNode = function (parentNode, len, beginPre, beginIn) {
        if (len === 1) return null;
        let pPre = beginPre,
            pIn, rPre;

        // parent index in inorder array
        pIn = inorder.indexOf(preorder[pPre]);
        let leftNode,
            rightNode = new TreeNode(null);
        if (pIn === beginIn) {
            rightNode.val = preorder[pPre + 1];
            parentNode.right = rightNode;
            buildParentNode(rightNode, len - 1, pPre + 1, pIn + 1);
        } else {
            leftNode = new TreeNode(preorder[pPre + 1]);
            parentNode.left = leftNode;
            buildParentNode(leftNode, pIn - beginIn, pPre + 1, beginIn);
            rPre = pPre + 1 + (pIn - beginIn);
            if (rPre < beginPre + len) {
                rightNode.val = preorder[rPre];
                parentNode.right = rightNode;
                buildParentNode(rightNode, beginPre + len - rPre, rPre, pIn + 1);
            }
        }
    };

    buildParentNode(parentNode, len, 0, 0);
    return parentNode;
};