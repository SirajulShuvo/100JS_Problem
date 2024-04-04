//*.................................................
//* Js interview Question
//*.................................................
// Write a function called calculateAverge that takes an array of numbers as input and returns the average of those numbers.

function calculateAverge(arr) {
    let length = arr.length;
    let avg;
    const arrReduce = arr.reduce((pre,cur) => {
      return pre + cur;
    })
    return arrReduce / length;
}

console.log(calculateAverge([3,4,5,32,2]))