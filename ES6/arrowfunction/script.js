// traditional function

function display1(){
    console.log("i'm traditional display1");
}
display1();


//arrow function

const arrDisplay = () =>{
    console.log("this is arrow display");
}
arrDisplay();

//return function

const messege1 = () => " This is an arrow function!";

console.log(messege1());

//passing parameter on arrow function

let add = (num1,num2) => num1+num2;
console.log(add(20,30));