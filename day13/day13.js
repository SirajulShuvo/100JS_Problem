//*.................................................
//* Js interview Question
//*................................................

// Write a function to calculate the sum of square of all elements in an array .For example,given the array [1,2,3] the function should  returns 13.

function sumOfSquare(arr) {
    const sum = arr.reduce((pre,cur) => {
        return (pre + Math.pow(cur,2));
    })
    return sum;
}
console.log(sumOfSquare([1,2,3]))
console.log(sumOfSquare([0,5,4]))