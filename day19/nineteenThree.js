//* Coding Challenge: Repeat a String 

//* // Write a function called repeatString that takes two parameters: T //? str: A string that needs to be repeated. //? num: An integer representing the number of times the string should be repeated. //? The function should repeat the input string str the specified number of times num and return the resulting string.

// Example usage: console.log(repeatString("abc", 5)); // Output: "abcabcabcabcabc // Constraints: //? The input string str will contain only alphanumeric characters and punctuation marks. //? The input number num will be a non-negative integer. //? The output string length should not exceed the length of str multiplied by num.

function repeatText(str,num) {
    let txt = '';
    if(num === 0){
        return str;
    }
    else{
        for(let i = 1; i <= num ; i++){
            txt += str;
        }
        return txt;
    }
}

console.log(repeatText('abc',0));