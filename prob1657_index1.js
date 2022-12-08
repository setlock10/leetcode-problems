// 1657. Determine if Two Strings Are Close
//
// Two strings are considered close if you can
//  Swap any two existing characters
//  Swap all occurences of one character with another and vice versa
//  to get the strings equal

var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false;
  
    // increase letter by 1
    // String.fromCharCode(s.charCodeAt(0) +1)
  
    let n = 26;
  
    const hash1 = {};
    const hash2 = {};
  
    for (let c of word1.split('')){
      if (hash1[c] === undefined)
        hash1[c] = 1;
      else
        hash1[c]++;
    }
  
    for (let c of word2.split('')){
      if (hash2[c] === undefined)
        hash2[c] = 1;
      else
        hash2[c]++;
    }
  
     if (JSON.stringify(Object.keys(hash1).sort()) !== JSON.stringify(Object.keys(hash2).sort()))
         return false;
  
       if (JSON.stringify(Object.values(hash1).sort()) !== JSON.stringify(Object.values(hash2).sort()))
         return false;
  
  
    console.log(hash1);
    console.log(hash2);
    console.log(Object.keys(hash1).sort())
  
    return true;
  
    
  };
  
  let word1 = 'cabbba';
  let word2 = 'abbccc';
  r = closeStrings(word1, word2);
  
  