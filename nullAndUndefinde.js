// Undefinde 

var name;
console.log('name');

// function dose not return any thing his value is undifinde

function total (num1, num2){
    console.log(num1+num2);
};
var result = total(13, 25);
console.log(result);
// If you do not pass any parameter value of the function, the value of that parameter is Undefinde
function total2 (num1, num2){
    console.log(num1,num2);
};
var result2 = total2(1);
console.log(result2);
// if you do not have any proparti of the object , you want to access the proparti . you finde un definde.
const student = {name:"Smart", phone:"009900"};
console.log(student.fatherName);
// you can set value undefinde
const name3 =undefined;
console.log(name3);

// null shouldbe set 