// write a function that has two parameter that one is str which a string and char which is a single character..
// Now count the most avilable character that provide  in the parameter char...
// the character  must incase-sensitive..

function countParaCharc(str,char) {
    str = str.toLowerCase();
    char = char.toLowerCase();
    const strArr = str.split('');
    let count = 0;
    const findIt = strArr.filter((v) =>{
        if(v === char){
            count++;
        }
        else{
            count;
        }
    })
    return count;
}

console.log(countParaCharc('Ilovesomethingnew','t'))
