//*.................................................
//* Js interview Question
//*.................................................
// write a function factorail that takes a non-negative integer num as input and returns it's factorial.
//The factorial of a non-negative integer n,denote as n!,is the product of all positive interger less than or equal to n.factorial of 0 define4d as 1.

function factorial(n){
    let factorial = 1;
    for(let i = n; i >= 1 ; i--){
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(0));
