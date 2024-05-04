//*
//* Programming Challenge: Simple Interest Calculator
//*.


//? Write a function calculateSimpleInterest that calculates the simple interest given the principal amount, rate of interest per annum, and time in years.

function calculateSimpleInterest(Principal,rate,time){
    return (Principal * rate * time) / 100;
}
console.log(calculateSimpleInterest (1000, 5, 3)); // Output: 150


// The formula for calculating simple interest is: Interest = P * R * T. P = Principal amount (the beginning balance). R = Interest rate (usually per year, expressed as a decimal). T = Number of time periods (generally one-year time periods).