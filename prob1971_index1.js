// 1971. Find if Path Exists in Graph
// Pseudocode
// queue <- initialize empty array
// seen <- initialize empty array
// graph <- initialize emty hashmap
// for all edges add to graph
// add starting node to queue and mark as visited
// while queue is not empty
//   get first node from queue and mark as visited
//   if node is destination return true
//   add all unvisited neighbor nodes to queue
// return false  

var validPath = function(n, edges, source, destination) {
    const queue =[];
    const seen = {};
    const graph = {};
  
    
    for (let i = 0; i < edges.length; i++){
      if (!graph[edges[i][0]])
        graph[edges[i][0]] = [edges[i][1]];
      else
      graph[edges[i][0]].push(edges[i][1]);
  
      if(!graph[edges[i][1]])
        graph[edges[i][1]]= [edges[i][0]];
      else
      graph[edges[i][1]].push(edges[i][0]);
        
    }
      
  
    queue.push(source);
  
  
  
    
    console.log('graph', graph);
  
    while (queue.length > 0){
        console.log(queue, seen)
  
      let currentNode = queue.shift();
      //console.log(currentNode);
      if (currentNode === destination)
        return true;
      
      console.log(seen[currentNode])
      
      if (!seen[currentNode])
        for (let i = 0; i < graph[currentNode].length; i++){
          console.log(queue, seen)
        
          queue.push(graph[currentNode][i]);
         console.log(queue, seen)
         
        }
      seen[currentNode] = true;
        
    }
  
    return false;
  
    
    
  };
  
  //let r = validPath(3, [[0,1],[1,2],[2,0]], 0, 2);
  let r = validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9);
  