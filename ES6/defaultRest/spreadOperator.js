console.clear();
// function addNumbers(x,y,z){
//     return x + y + z;
// }
// let numbers = [1,2,3];
// //console.log(addNumbers(numbers[0],numbers[1],numbers[2]));
// let numbers1 = [5,6,7,...numbers];

// console.log(numbers1)
// console.log(addNumbers(...numbers1)); //es6 spread operator

//array concatinate usuing spread array

let num1 = [8,9,10];
let num2 = [11,12,13];

//let num = num1.concat(num2);

let num = [...num1,...num2];
console.log(num);

//object handeling usuing spread operator

let p1 = {
    name : "Mehedi Hasan",
    age : 26
}
let p2 = {
    nationality : "Bangladeshi",
    occupation :"student"
}
let p = {...p1,...p2}
console.log(p);

