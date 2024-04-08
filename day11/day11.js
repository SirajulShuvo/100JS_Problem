//*.................................................
//* Js interview Question
//*................................................
// Write a function takes a string as input and return the count of vowels in that string .Consider a,e,i,o,u vowels (both lowercase and uppercase);

function findVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    const arrStr = [...str];
    const vowels = ['a','e','i','o','u'];
    const findIt = vowels.forEach((va) =>{
        arrStr.forEach((v) => {
            if(v === va){
                count++;
            }else{
                count;
            }
        })
    })
    return count;
}

console.log(findVowels('Helloo world'));
console.log(findVowels('The quIck brOwn fOx'));
console.log(findVowels('Brrr'))