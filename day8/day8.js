//*.................................................
//* Js interview Question
//*.................................................
//write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal and false otherwise.

const a = [4,5,4]
const b = [4,5]
function d(arr,arr2) {
    if(arr.length !== arr2.length){
        return false;
    }else{
        return arr.every((v,i) => {
            return v === arr2[i]
        })
    }
}
console.log(d(a,b))