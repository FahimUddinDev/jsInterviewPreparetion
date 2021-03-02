const numberArry = [1,2,3,4,5,6,7,8,9];
const copy = numberArry.slice(2,6);
console.log(copy);
console.log(numberArry);
// slice can not change main arry. slice only make a copy in you requerment.  slice first argument is where are you want to start and second argument is where ar you want to stop.

const move = numberArry.splice(2,3);

console.log(move);
console.log(numberArry);
const moveandInject = numberArry.splice(2,3,5);
console.log (moveandInject);
//splice can change main arry. splice move item from main arry. splice first argument is where are you want to splice and second argument how many word you want to splice. you can inject a new item in main manue by give third argument.
const joined = numberArry.join('Fahim');
console.log(joined);
// join add a new element your arry every element. join make this arry in a string