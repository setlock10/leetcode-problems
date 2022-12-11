/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    gainFromSubTree(root);
    return maxSum;
  
    function gainFromSubTree(node){
      if (!node) return 0;
      let gainFromLeft = gainFromSubTree(node.left);
      let gainFromRight = gainFromSubTree(node.right);
      if (gainFromLeft < 0) gainFromLeft = 0;
      if (gainFromRight< 0) gainFromRight= 0;
      if (node.val + gainFromLeft + gainFromRight > maxSum)
        maxSum = node.val + gainFromLeft + gainFromRight;
      if (gainFromLeft > gainFromRight){
        return node.val + gainFromLeft;
      }
      else{
        return node.val + gainFromRight;
      }
    }
  };