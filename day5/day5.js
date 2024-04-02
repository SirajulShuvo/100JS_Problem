//*.................................................
//* Js interview Question
//*.................................................
// Write a function to findMax that takes an array of number as input and return the maxium number in array..

function findMaxValueArray(arr){
    // const max = Math.max.apply(0,arr);
    // return max;
    let maxium = -Infinity;
    const max = arr.reduce((pre,cur) =>{
        if(maxium < cur){
            maxium = cur;
        }else{
            maxium;
        }
    },0)
    return maxium;
}
console.log(findMaxValueArray([5555,1,244,222,444444,66,777]));
console.log(findMaxValueArray([-10,-5,-3,-9,-2]));
console.log(findMaxValueArray([5]));