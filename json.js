const student={
    id:154,
    location :'dhaka',
    application :{
        color:'red',
        mind:'system',

    },
};
const studentjson=JSON.stringify(student);
console.log(student);
const studentobj=JSON.parse(studentjson);
console.log(studentobj);
// let Name=52+'';
// console.log(Name)
// const name = 'Hero';
// const age = 34;

// const person = {name, age}; 
// console.log(person);
let person =null;

console.log(person ? person : "person is null");