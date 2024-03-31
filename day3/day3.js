//*.......................................................
//* Js interview Question
//*......................................................

// Write a function to sort an array of number in an asecnding order..
// todo Requirement's.........................
// the should take an array of number as a input.
// it should reuturn a new array with the number sorted in ascending order.
// The original array should remain unchanged.
// You are not allowed to use the  bulit-in sort()mathod..(but you can use compare something in the sorth mathod..)
// Example console.log(sortAscendingOrder([1,3,2,33,22])) // output [1,2,2,22,33];

function sortAscendingOrder(inputArr) {
    const arr = inputArr.sort((a,b) => a - b)
    return arr;
}
console.log(sortAscendingOrder([1,3,2,33,22,4,5]))