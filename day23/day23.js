//? The input object may have any number of properties, including zero. 
//? The function should return a message indicating whether the object is empty or not.
//? You should use the provided isEmptyObject function signature without any additional parameters.

function cheakEmptyObject(obj){
    const keys = Object.keys(obj)
   if(keys.length === 0 || keys === null){
    console.log('Object is empty');
   }else{
    console.log('Object is not empty');
   }
}
cheakEmptyObject({});
cheakEmptyObject({a:null});
cheakEmptyObject({a:11,B:22});