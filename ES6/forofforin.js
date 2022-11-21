//for of and for in

//for of
const names = ['a1','a2','a3'];

for(let name of names){
    console.log(name);
}

//for in
let students = {
    id: 105,
    name : "mehedi",
    cgpa: 3.82
}

for(let x in students){
    console.log(x);
    console.log(students[x]);
    console.log(`${x} : ${students[x]}`);
}