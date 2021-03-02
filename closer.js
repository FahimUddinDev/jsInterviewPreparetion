
function firstFunc (){
    let num=0;
    return function(){
        num++
        return num;
    }
}
const clock1 = firstFunc();
console.log(clock1());
const clock2 = firstFunc();
console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());