//*
//* Programming Challenge: Number of Days Between Two Dates
//*
//? Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format "YYYY-MM-DD".
// Hint
// Q
// Days= 24*60*60*1000


function calculateDaysBetweenDates(userinput1,userinput2){
    let a = new Date(userinput1);
    let b = new Date(userinput2);
    let dif = Math.abs(b - a);
    return dif / (24*60*60*1000);
}
console.log(calculateDaysBetweenDates ("2024-01-01", "2024-01-31")); // Output: 30