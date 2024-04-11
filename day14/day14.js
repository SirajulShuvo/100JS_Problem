//*.................................................
//* Js interview Question
//*................................................

// Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

function findMinValue(arr) {
    if(arr.length === 0){
        return undefined;
    }
    let minValue = Infinity;
    const min = arr.reduce((pre,curr) =>{
        if(minValue > curr){
            minValue = curr;
        }else{
            minValue;
        }
    })
    return minValue;
}

console.log(findMinValue([3,-2,11,44]));
console.log(findMinValue([2,-7,-10]));
console.log(findMinValue([]));