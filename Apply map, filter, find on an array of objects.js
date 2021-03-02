const student = [
    {id: 123, name: 'Faysal'},
    {id : 124, name : 'Fahim'},
    {id : 125, name : 'Uddin'},
    {id : 126, name : 'Mahamud'}
]
const studentName = student.map(student=>student.name);
console.log(studentName);

const studentNameFilter = student.filter(student=>student.id>124);
console.log(studentNameFilter);

const studentNameFind = student.find(student=>student.id>124);
console.log(studentNameFind);

// for ( let i = 0; i< student.length; i++){
//     let oneStudent = student[i];
//     let studentname = oneStudent['name'];
//     console.log(studentname);
// }

