//? Write a function removeDuplicates that takes an array of elements as input and returns a new array with duplicate elements removed.
//? Your task is to implement the removeDuplicates function using JavaScript and ensure that the returned array contains only unique elements from the input array. The order of elements in the output array should be the same as the original array, with the first occurrence of each unique element preserved.


//* Constraints:
//? The input array may contain elements of any data type.
//? The function should return a new array with duplicate elements removed, while preserving the order of elements from the original array.

function removeDuplicates(arr) {
    // const uniqueValue = [...new Set(arr)];
    // return uniqueValue;

    const unique = arr.filter((v,i,arr) => {
        return arr.indexOf(v) === i;
    })
    return unique;
}

console.log(removeDuplicates([1,2,3,3,4,4,5]))//[1,2,3,4,5];
console.log(removeDuplicates(['a','b','c','b','a']))// [a,b,c]