function  adding (){
    const numberArry = [...arguments];
    let result =0;
    for (let i = 0; i<numberArry.length; i++){
        let oneByone = numberArry[i];
        result += oneByone;
    }
    return result;
};
console.log(adding(1,2,3,4,10,20,30,20,10));