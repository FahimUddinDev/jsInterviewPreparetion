const nameList = ['fahim','Uddin','Faysal', 'Mahamud'];

for (let i =0; i<nameList.length; i++){
    if(nameList[i]!='Faysal'){
        console.log(nameList[i]);
    }
    else {
        break;
    }
    
}
for (let i =0; i<nameList.length; i++){
    if(nameList[i]!='Faysal'){
        console.log(nameList[i]);
    }
    else {
        continue;
    };
    
}