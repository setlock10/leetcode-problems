/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    //pseudocode for roman numerals
 // define roman numeral values
 // take string and split into array
 // create results array of same length
 // set values and check if next value is greater than pervious, if it is, change sign.
 // return the sum of all all values in results array

const arr = s.split('');
 const results= new Array(arr.length);
 let sum = 0;

 for (let i = 0; i < arr.length; i++){
     results[i] = getArabic(arr[i]);
     if (i +1 < arr.length){
         if (results[i] < getArabic(arr[i+1])){
             results[i]*=(-1)
         }
     }

 }
 
 for (a of results){
     sum+=a;
 }
 return sum;

 
};

function getArabic(s){
 if (s === 'I') return 1;
 if (s === 'V') return 5;
 if (s === 'X') return 10;
if (s === 'L') return 50;
if (s === 'C') return 100;
if (s === 'D') return 500;
if (s === 'M') return 1000;

}