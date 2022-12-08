// Definition for a binary tree node.
// Almost works :|
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
    const node0 = new TreeNode(11);
    const node1 = new TreeNode(18);
    const node2 = new TreeNode(7);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(15, node0, node1);
    const node5 = new TreeNode(5, node3, node2)
    const rootNode = new TreeNode(10, node5, node4);
  
   
  function bfs(node,   nextSibling = null, nextChild =null, isRoot= true ){
    //if (isRoot) console.log(node.val);
    console.log(node.val);
  
    if(!nextSibling && !nextChild && !isRoot) return;
  
    if(!nextSibling && !nextChild){
      if (node.left && node.right){
        if(node.left.left){
          console.log('f1',node.left.val, node.right.val, node.left.left.val)
          bfs(node.left, node.right, node.left.left, false);
        }else if (node.left.right)
        {
          console.log('f1',node.left.val, node.right.val, node.left.right.val)
          bfs(node.left, node.right, node.left.right, false)
        }else{
          console.log('f2',node.left.val, node.right.val, null)
          bfs(node.left, node.right, null, false)
        }
      }//something needs to go here
          
    }
    else if (nextSibling && nextChild){
      if (node.left){
        console.log('f3', nextSibling.val, nextChild.val, node.left.val)
        if(node.left===nextChild)
          bfs(nextSibling, nextChild, node.right, false)
        else
          bfs(nextSibling, nextChild, node.left, false)
      }
      else if(node.right){
        console.log('f4', nextSibling.val, nextChild.val, node.right.val)
        bfs(nextSibling, nextChild, node.right, false)
      } else{
        console.log('f5', nextSibling.val, nextChild.val, null)
        bfs(nextSibling, nextChild, null, false)
      }
    }
    else if (nextSibling){
        console.log('f6', nextSibling.val, null, null)
      bfs(nextSibling, null, null, false)
    }
   
  }
  
  //dfs(rootNode);
  bfs(rootNode);
  