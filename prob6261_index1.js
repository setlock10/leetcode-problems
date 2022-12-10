// 6261

a=["alic3","bob","3","4","00000"]
b=["1","01","001","0001"]
x=["3glko","bob","3","4","00000"]

//console.log(parseInt(a))

var maximumValue = function(strs) {
    
    let max= 0;
  
    
    for ( s of strs){
      //console.log(s);
           console.log(isAllNum(s));

      if (isAllNum(s)){
  
           if (parseInt(s)>max){
        max = parseInt(s);
      }
 
      }else{
              if (s.length > max){
          max = s.length
        }
 
      }
      
    }
  return max;

  function isAllNum(str){
    for (c of s){
      if (isNaN(parseInt(c))){
        return false;
      }      
    }
    return true;
  }
  
     
    
};

r = maximumValue(a);