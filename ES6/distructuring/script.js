//array distructure

let numbers = [10,20,30,40,50];
let[num1,num2,num3,num4,num5] = numbers;
console.log(num1);

//swap variable

let a = 60, b = 70;
[a,b]= [b,a]

console.log(a);
console.log(b);

//object distructure
// 1)basic object distructure

const studentInfo = {
    id :101,
    fullName : "Mehedi Hasan",
    cgpa :3.82
}
const {id,fullName,cgpa} = studentInfo;
console.log(id);
console.log(fullName);

//2) Nestade object distructured
const studentInfo1 = {
    id :101,
    fullName : "Mehedi Hasan",
    cgpa1 :3.82,
    language : {
          bangla : "native",
          english : "intermediate"
    }
}
const {cgpa1,language} = studentInfo1;
console.log(cgpa);
console.log(language.english);

//destructuring function parameter

const studentInformation = ({id,fullname}) =>{
   console.log(`id = ${id} Name = ${fullname}`);
}
const student = {
    id : 202920,
    fullname : "lionel Messi"
}
studentInformation(student);