/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let hash = new Map();
    let result = [];

    for (let c of s.split('')){
        console.log(c);
        if (hash[c] === undefined){
            hash[c] = 1;
        }
        else {
            hash[c]++;
        }
    }
    console.log(hash);

   // const sortedHash= new Map([...hash].sort((a, b) => b[1] - a[1]));

   var array = [];
for (var key in hash) {
  array.push({
    name: key,
    value: hash[key]
  });
}

var sorted = array.sort(function(a, b) {
  return (a.value > b.value) ? -1 : ((b.value < a.value) ? 1 : 0)
});

    console.log(sorted[0].name);

    for (let i = 0; i < sorted.length; i++){
        for (let j = 0; j < sorted[i].value; j++){
            result.push(sorted[i].name);
        }

    }

    



       // for (let c in sortedHash){
         //   for (let i=0; i<sortedHash[c]; i++){
         //       result.push(c)
          //  }

       // }
     return result.join('');

    
};