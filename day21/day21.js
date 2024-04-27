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
