/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let result = new ListNode(sum);
    let currentNode = result;
   //  let currentNode = new ListNode(sum);
   //  let result = currentNode;
  
    while(l1 || l2){
      console.log('start:', sum);
      if(l1){ 
        sum += l1.val;
        l1 = l1.next;
      }
      if(l2){ 
        sum += l2.val;
        l2 = l2.next;
      }
      currentNode.next = new ListNode(sum % 10);
      currentNode = currentNode.next;
      sum = Math.floor(sum / 10);
          
    }
   // console.log(l1, sum)
      console.log('end:', sum);
    
    if (sum > 0){
  
      currentNode.next = new ListNode(Math.floor(sum));
    }
    
    return result.next;
   
     };
  