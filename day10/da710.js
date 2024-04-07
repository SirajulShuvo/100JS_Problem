//*.................................................
//* Js interview Question
//*................................................

//Write a function that takes an array of interger as input and removes any duplicate elements,returning a new array with only the unique elemnets

function uniqueValueOfArray(arrInput) {
    // const unique = new Set(arrInput);
    // const uniqueArray = [...unique]
    // return uniqueArray;

    const uniqueValue = arrInput.filter((v,i,array) => {
        return array.indexOf(v) === i;
    })
    return uniqueValue;
}
console.log(uniqueValueOfArray([1,1,3,4,2,2,3,4,4]));
