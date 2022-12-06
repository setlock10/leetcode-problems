
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var oddEvenList = function(head) {
    // group the odd indices together followed by even indices
    // You must solve the problem in O(1) extra space complexity and O(n) time complexity
    // Pseudocode
    // 
    // Initialize resultNode
    // Initialize oddNode
    // Initialize evenNode
    // 
    //  oddNode <- head
    //  resultNode <- head.next
    //  
    // while head.next exists
    //    oddNode <- head
    //    resultNode <- head.next
    // else
    //    evenNode <- head
    //
    // 
   
    let oddNode = new ListNode();
    let evenNode = new ListNode();
    
    let tempOdd = oddNode;
    let tempEven = evenNode;
  
    if (!head){
        return head;
    }
    
    while (head.next&&head.next.next){
      //console.log(tempNode)
      
      tempOdd.next = new ListNode(head.val);
      tempOdd = tempOdd.next;
      head = head.next;
      tempEven.next = new ListNode(head.val);
      tempEven = tempEven.next;
      head = head.next;
      //console.log(head)
    }
        tempOdd.next = new ListNode(head.val);
      tempOdd = tempOdd.next;
      if (head.next){
        tempEven.next = new ListNode(head.next.val);
        tempEven = tempEven.next;
        tempOdd.next = evenNode.next;
        return oddNode.next;
      } 
      else{
        tempOdd.next = evenNode.next;
        return oddNode.next;
      }
  
  };
  
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(6);
  
  let r = oddEvenList(head);