//* Your task is to implement two functions:

//? Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.

//? Convert Array to Object: Write a function arrayToObject that takes an array of key-value pairs (as returned by the objectToArray function) and returns a new object with the keys and values from the array.

// Object ot array
function objectToArray(obj) {
    return Object.entries(obj);
}
console.log(objectToArray({a:1,b:2}))
console.log(objectToArray({name:'shuvo',age:20,city:'dhaka'}))

//Array to Objet
function arrayToObject(arr){
    // return {...arr};
    return Object.assign({},arr);
}
console.log(arrayToObject([1,3,4]))