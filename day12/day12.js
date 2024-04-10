//*.................................................
//* Js interview Question
//*................................................

//Write a function called isPowerOfTwo that takes an interger num as input and returns true if num is a power of two otherwise returen false

function isPowerOfTwo(num) {
    for (let x = 0; x < num; x++) {
        if(Math.pow(2,x) === num){
            return true;
        }
    }
    return false;
}
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(7))