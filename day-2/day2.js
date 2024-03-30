//*.......................................................
// Js interview Question
//*......................................................

// Write a function called cheakTryAngle that takes three parameter reprenstig 
//the length of the sides of a triangle .The function should return a string indicating
// the type of trigle equalateral,isoseclesor scalene...
function cheakTryAngle(a,b,c){
    if(a === b && a === c && b === c )return 'Equilateral';
    else if((a === b) || (a === c) || (c === b))return 'Isosceles';
    else return 'scalene';
}
console.log(cheakTryAngle(3,3,3));
// If all three side are equal of length ,return 'Equilateral';
// If  two side are equal of length ,return 'Isosceles';
// If all no side are equal of length ,return 'scalene';

