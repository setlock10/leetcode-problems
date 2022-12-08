var halvesAreAlike = function(s) {
    //You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.  Count the vowels in each half. if equal return true.
  
    // Pseudocode
    //
    // let countA=0
    // let countB=0
    // let a = s.toLowerCase.split('').slice(0,s.length/2)
    // let b = s.toLowerCase.split('').slice(s.length/2, s.length)
    // While (a.length>0)
    //  If ( a.shift() === ('a') || a.shift
  
    let countA = 0;
    let countB = 0;
  
    let a = s.toLowerCase().split('').slice(0,s.length/2)
    let b = s.toLowerCase().split('').slice(s.length/2, s.length)
  
    while (a.length > 0){
      let as = a.shift();
      let bs = b.shift();
  
      if(as==='a' || as==='e' || as==='i' || as==='o' || as==='u')
          countA++;
      if(bs==='a' || bs==='e' || bs==='i' || bs==='o' || bs==='u')
          countB++;
    }
  
    if(countA === countB){
      return true;
    }
    else{
      return false;
    }
  
  
  
  
    
  };
  
  r = halvesAreAlike('book');
  