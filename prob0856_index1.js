
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var middleNode = function(head) {
  
    let slow = head;
    let fast = head;
    
    while (fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
  
     if (!fast.next){
     return slow;
     }
    else{
      return slow.next;
    }
    
  };
  
  
  const head = new ListNode(1);
  head.next = new ListNode(2);
  // head.next.next = new ListNode(3);
  // head.next.next.next = new ListNode(4);
  // head.next.next.next.next = new ListNode(5);
  // head.next.next.next.next.next = new ListNode(6);
  
  let r = middleNode(head);