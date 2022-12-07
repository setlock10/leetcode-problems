const a = [(1, 2, 3)]
// 938. Range Sum of BST
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
// Start time: 8:36am
// Finished setup at 8:59

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


var rangeSumBST = function(root1, low, high) {
  // Pseudocode
  // create helper function isIn
  // if root.val isIn 
  //    sum += root.val
  //    if root.left.val isIn
  //      return rangeSumBST(root.left, low, high, sum)
  //    if root.right isIn
  //      reuturn rangeSumBST(root.right, low, high, sum)
  //console.log (root1, low, high,  isIn(root1.val, low, high))
  // 
  // 

  const arr = [root1];
  let sum = 0;
 // arr.push(root1.left);
 // arr.push(root1.right);


  while (arr.length > 0) {
      
    let node = arr.shift()
    //console.log(node.val, sum);
    if (isIn(node.val, low, high)){
      sum += node.val;
    }
      console.log(node.val, sum);
  
    

    if (node.left) arr.push(node.left);
     if (node.right) arr.push(node.right);

    


    

     }

  //return (sum - root1.val) / 2 + root1.val;
  return sum;



    //if (isIn(root1.val, low, high)){
    // sum+= root1.val;
    //}
    //   if(root1.left){
    //if (isIn(root1.left.val, low, high)){
    //      return rangeSumBST(root1.left, low, high, sum);
    //}
    // }

    // if(root1.right){
    //   //if (isIn(root1.right.val, low, high)){
    //     return rangeSumBST(root1.right, low, high, sum);
    //   //}
    // }

    //}

    //if (!root1.right && !root1.left) return sum;





  };
  const node1 = new TreeNode(18);
  const node2 = new TreeNode(7);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(15, null, node1);
  const node5 = new TreeNode(5, node3, node2)
  const rootNode = new TreeNode(10, node5, node4);

  let r = rangeSumBST(rootNode, 7, 15)

  function isIn(val, low, high) {
    return (val >= low && val <= high);
  }