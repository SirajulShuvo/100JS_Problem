//*.......................................................
//* Js interview Question
//*......................................................
//Write a function to determine wheather a given string is a palindrome or not..
// A palindrome is word ,phrase,number,or other sequence or character that read the same forward and backword ignoring spaces,punctuation and capitalization..

function isPalindrome(str){
    str = str.toLowerCase().replace(/\W/g,'');
    const arr = str.split('').reverse().join('');
    if(str === arr){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('A man , a plan, a canal, panama'));