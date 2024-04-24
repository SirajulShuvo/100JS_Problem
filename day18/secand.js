const arr = [1,2,3,2];
const obj = {};
for(let x of arr){
    obj[x] = (obj[x] || 0) + 1; 
}
console.log(obj);