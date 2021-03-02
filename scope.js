//Global Scope
let numberMain = 20;

function add (num1, num2){
    //Local scope
    let result = num1+num2;
    console.log(result);
    return result+numberMain;

};
console.log(add(1,2));
// you can not use a local scope out side her function 
// you can call any ware a global scope
// declear variable by var can access her parent scope 
// her parent parent can not access
// hoisting called declear variable go out side her scope (var can hoisting let and const can not hoisting)