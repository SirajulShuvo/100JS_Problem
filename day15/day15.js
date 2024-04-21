// Write a function to cheack if a given string start with specific substring.

function cheackSomething(str,subStr) {
    const arrStr = str.split(' ');
    if(arrStr[0] === subStr){
        return true;
    }else{
      return false;
    }
}
console.log(cheackSomething('one two','ones'));