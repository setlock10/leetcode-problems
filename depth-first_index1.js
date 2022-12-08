// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
  
    const node1 = new TreeNode(18);
    const node2 = new TreeNode(7);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(15, null, node1);
    const node5 = new TreeNode(5, node3, node2)
    const rootNode = new TreeNode(10, node5, node4);
  
  function dfs(node){
    if(!node) return;
    console.log(node.val);
    dfs(node.left);
    dfs(node.right)
  }
  
  dfs(rootNode);