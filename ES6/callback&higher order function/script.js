//callback function and higherorder function
console.clear();
function square(x) {
    console.log(`The square of ${x} : ${x*x}`);   
};
//square(5);

function higherOrderFunction(num,callback) {
    callback(num);
}
higherOrderFunction(6, square);

//...............................................................

const taskOne = (callback) =>{
    console.log( "Task1");
    callback();
}

// 2 asynchronous function of es6
const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Data is looding!");
        callback();
    },3000)
}

const taskThree = (callback) => {
    console.log("Task3");
    callback();

}

const taskFour = () => console.log("Task4");

taskOne(function f1(){
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour();
        });
    });
});

document.querySelector("button").addEventListener('click',()=>{
  console.log('button is clicked');
})
