// Write a function to reverse a string without using any built-in methods.

function reverseStr(str){
    let text = '';
    for (let x = str.length-1; x >= 0; x--) {
         text += str[x];
    }
    return text;
}

console.log(reverseStr('one'));