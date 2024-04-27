//? Using recersive  Write a function called numberRange that generates an array containing consecutive numbers from a to b inclusive).
//* Input: //? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range. 
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

function numberRangeRecarsion(start,end,arr = []){
    if(start <= end){
        arr.push(start);
        return numberRangeRecarsion(start+1,end,arr);
    }
    return arr;
}
console.log(numberRangeRecarsion(0,5))