// const names = [];
const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaa'},
    {id: 41, name: 'Bobita'},
    {id: 71, name: 'Deepjol'}
];
const names = students.map( students => students.name);
const ids = students.map(students => students.id);
const bigger = students.filter(students => students.id > 40);


// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     // console.log(element.name);
//     names.push(element.name); 
// }

console.log(bigger);