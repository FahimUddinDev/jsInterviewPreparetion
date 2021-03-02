// map function 

const number = [1,2,3,4,5,6,7,8,9];
const square = number.map((element)=> element*element);
console.log(square);


// filter function

const even = square.filter(element => element%2==0);
console.log(even);

//find function
const firstOddNumner = square.find(element => element%2!=0);
console.log(firstOddNumner)