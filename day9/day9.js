//*.................................................
//* Js interview Question
//*................................................

// write a function that takes a number as input and returns the sum of it's digits;

function sumOfDigit(num) {
    let str = String(num);
    const arrOfNumber = [...str];
    const sum = arrOfNumber.reduce((pre,curr) => {
        return (Number(pre) + Number(curr));
    })
    // console.log(typeof sum)
    return sum;
}
console.log(sumOfDigit(54563));