// write a function findMidilian(arr) that taks an array of numbers as input and returns the median value .If the array has an even number of element's return average of the two middle

//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

//todo Tips ?Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the median is the average of the two middle elements.

function middleNumberOfArray(arr) {
    const sortArr = arr.sort((a,b) => a -b)
    let length = sortArr.length;
    let mid = Math.floor(length/2);
    if(length % 2 === 0){
        let avg = (sortArr[mid] + sortArr[mid - 1]) / 2 
        return avg;
    }
    else{
        return sortArr[Math.floor(length/2)];
    } 
}
console.log(middleNumberOfArray([3,4,5,7,6,9]));
console.log(middleNumberOfArray([3,4,7,5,6]));