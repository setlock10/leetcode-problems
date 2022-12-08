/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    let arr1 = [root1];
    let arr2 = [root2];

    let leaves1 = [];
    let leaves2 = [];

    while (arr1.length > 0){
        node = arr1.shift();
        if (!node.right && !node.left){
            leaves1.push(node.val)
        }

        if (node.left) arr1.unshift(node.left);
        if (node.right) arr1.unshift(node.right);

    }

    while (arr2.length > 0){
        node= arr2.shift();
        if (!node.right && !node.left){
            leaves2.push(node.val)
        }
        if (node.left) arr2.unshift(node.left);
        if (node.right) arr2.unshift(node.right);
    }



    console.log(leaves1, leaves2)
    if (JSON.stringify(leaves1)===JSON.stringify(leaves2)){
        return true;
    }
    else{
        return false;
    }
};