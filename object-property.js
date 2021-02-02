   // system:-1
// const students = [
//     {id: 21, name: 'Omar'},
//     {id: 31, name: 'Abubakar'},
//     {id: 41, name: 'Usman'},
//     {id: 17, name: 'Ali'},
// ];
// const output = [];
// for(let i = 0; i<students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);

// system:-2
const students = [
    {id: 21, name: 'Omar'},
    {id: 31, name: 'Abubakar'},
    {id: 41, name: 'Usman'},
    {id: 17, name: 'Ali'},
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s=> s.id>40);
const biggerOne = students.find( s=> s.id>30);

console.log(biggerOne);
