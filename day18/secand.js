// Write a JavaScript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array

const arr = [1,2,3,2];
const obj = {};
for(let x of arr){
    obj[x] = (obj[x] || 0) + 1; 
}
console.log(obj);