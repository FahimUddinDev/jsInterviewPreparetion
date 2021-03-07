const firstPerson = {
    name : 'Fahim Uddin',
    des: 'eng',
    totalSelary: 13000,
    seleary: 0,
    homeRent: function rent(rent, waterRent, tax){
        console.log(this.name);
        this.seleary=this.totalSelary-rent-waterRent-tax;
        return this.seleary;
    }

};
 const secondPerson ={
     name : "Faysal Mahamud",
     des: 'Fokir',
     totalSelary:10000,
     seleary:0,
 };
// bind 
 const giveRent = firstPerson.homeRent.bind(secondPerson);
 giveRent(1000, 100, 50, 10);
 console.log(secondPerson.seleary);

 //call
firstPerson.homeRent.call(secondPerson, 2000, 200, 100, 20);
console.log(secondPerson.seleary);

// apply 
 firstPerson.homeRent.apply(secondPerson, [3000, 300, 150, 30]);
 console.log(secondPerson.seleary);