/*______________________________________________________________________________________
1.How do you find difference bwtween two largest numbers in an array
A. filter duplicates
    sort high to low
    difference between 1st and last element
 */   
let findLargeDifferenes= function(arr){
   arr=Array.from(new Set(arr));
   let sorted=arr.sort((a,b)=>(a-b));
   return sorted[sorted.length-1]-sorted[0]
}
//console.log(findLargeDifferenes([1,22,45,67,1,77,34,56,78,56]))
/* ______________________________________________________________________________________
2. palindrome , Ex: radar,racecar
A.  find word.length
    find substring 0 to word.length /2 and word.length/2 to word.length
    reverse the second set and compare with first
*/    
 let  palindrome= function (word){
     let len=word.length;
     let start = word.substring(0,Math.floor(len/2));
     let end=word.substring(len-Math.floor(len/2));
     let rev=end.split('').reverse().join('');
     if(start===rev){return true}
     else{return false}
 }
 //console.log(palindrome('radar'))
 /*________________________________________________________________________
 /**
 * Write a script that will find all the vowels [a,e,i,o,u] inside any string
 * and then flip the order of only the vowels. If there is an odd number of vowels
 * then the one in the middle stays in the same position. Complete this task with the
 * fewest number of loops and iterations as possible.
 * Eg:
 * hello => holle
 * javascript => jivascrapt
 */
let reverseOrderOfVowels = word => {
   let vowels = ['a', 'e', 'i', 'o', 'u'];
	let arrVowels = word.split('').filter(letter => vowels.indexOf(letter)> -1); //find vowels  array
	let result = word.split('').map(letter => vowels.indexOf(letter) > -1 ? arrVowels.pop() : letter);
	return result.join('');

};
// console.log(reverseOrderOfVowels("javascript"));
 /*____________________________________________________________________________
 
 
 */