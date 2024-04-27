//? Write a function called numberRange that generates an array containing consecutive numbers from a to b inclusive).
//* Input: //? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range. 
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.


//* Output: //? An array containing consecutive numbers from a to b (inclusive).

function numberRange(start,end){
    let newArr = [];
    for(let i = start; i <= end ; i++){
        newArr.push(i);
    }
    return newArr;
}
console.log(numberRange(0,5))
console.log(numberRange(-2,2))
console.log(numberRange(3,7))

//* Constraints: 
//? a and b will be integers. 
//? a will be less than or equal to b console.log(numberRange(0,5));
// Output: [0, 1, 2, 3, 4, 5]

