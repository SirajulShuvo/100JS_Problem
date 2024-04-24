//Write a function called findMode that takes an array of numbers as input and returns the mode the array (the number that appears most frequently). function findMode(arr) { // Your code here } 

// Example usage: console.log(findMode ([1, 2, 2, 3, 1, 4, 2])); // Output: 2 //* Constraints: //? The input array will always contain at least one element. //? The mode will always be unique (i.e., there won't be multiple numbers with the same highest

function mostAppears(arr){
    let counts = {};
    let maxCount = 0;
    let mostCommon;

    // Count occurrences of each element
    arr.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
        if (counts[element] > maxCount) {
            maxCount = counts[element];
            mostCommon = element;
        }
    });

    return mostCommon;
}

console.log(mostAppears([1,2,3,3,,3,3,2,3,2,3,3,2,2,2,3,4,5])); // Output: 2

