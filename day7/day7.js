//*.................................................
//* Js interview Question
//*.................................................

// Write a function called calculateAvg that takes an array of number as input and return the average of those numbers.

function calculateAvg(arr) {
    let length = arr.length;
    const arrReduce = arr.reduce((pre,curr) => {
        return pre + curr;
    })
    return arrReduce / length;
}
console.log(calculateAvg([3,2,44,66]));