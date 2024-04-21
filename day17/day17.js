// Write a function to call calculateMean that takes an array of numbers as input and returns the mean of those numbers

function calculateMean(arr) {

    let le = arr.length;
    if(le === 0){
        return 0;
    }
    const red = arr.reduce((pre,curr) => {
        return (pre + curr);
    })
    return red/le;
}
console.log(calculateMean([2,3,4,5,6]))
console.log(calculateMean([10,20,30]))
console.log(calculateMean([-1,0,1]))
console.log(calculateMean([]))