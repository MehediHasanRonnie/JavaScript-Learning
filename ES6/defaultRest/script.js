//default

function messege(text = "this will be print as default;"){
    console.log(`${text}`);
}
messege();
messege("I love es6");

//rest peremeter

function number(x,y,...z){
    console.log(`x = ${x} y = ${y} z = ${z}`);
}
number(2,3,4,5,6,7,8,9);