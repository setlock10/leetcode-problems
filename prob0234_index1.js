//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var isPalindrome = function(head) {
    // Given head of linked list,  return true if it is a palindrome or false otherwise.
    //
    // pseudocode
    // create empty array arrForward
    // create empty array arrReverse
    // while head.next exists
    //    arrForward <- add head to end of array
    //    arrReverse <- add head to front of array
    //    head <- head.next
    // if arrForward === arrReverse
    //    return true
    // else
    //    return false
    //
    // end
  
  
    const arrForward = [];
    const arrReverse = [];
  
    while (head){
      arrForward.push(head.val);
      arrReverse.unshift(head.val);
      head = head.next;    
    }
  
    console.log(arrForward, arrReverse);
    if (JSON.stringify(arrForward) === JSON.stringify(arrReverse)){
      return true;
    }
    else{
      return false;
    }
      
  };
  
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(2);
  head.next.next.next.next = new ListNode(1);
  //head.next.next.next.next.next = new ListNode(6);
  
  let r = isPalindrome(head);