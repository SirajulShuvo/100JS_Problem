//Write a function called simplePasswordValidator that takes a single parameter: 
//? password: A string representing the password to be validated.

//? The function should validate the password based on the following criteria:
//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters. ? The function should return true if the password meets all the criteria, otherwise, it should return false.

//* Input: //? password: A non-empty string representing the password to be validated.
//* Output: //? true if the password meets all the criteria. 
//? false otherwise. 

// Constraints: 
//? The input string password will contain only alphanumeric characters and punctuation marks. console.log(simplePasswordValidator("afkdsfadsf")); // Output: false

function passwordGenerator(minChar){
   let lowStr = 'abcdefghijklmnopqrstuvwxyz01234';
   let UpStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ56789';
   let sSymbol = '@#$%^&*()_-';
   let password ='';
   let all = [...lowStr,...UpStr,...sSymbol];
   for(let i = 0; i < minChar ; i++){
    let randomText = Math.floor(Math.random() * all.length);
    console.log(randomText)
     password += all[randomText];
   }
   if(password.charAt(0) === '0'){
    return password.replace(charAt(0),'');
   }else{
    return password;
   }
}
console.log(passwordGenerator(10));
