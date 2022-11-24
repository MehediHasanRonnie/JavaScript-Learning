//Assynchronous

const taskOne = () => console.log( "Task1");
// 2 asynchronous function of es6
const dataLoading = () => console.log("Task2,data is loading");
const taskTwo = () => {setTimeout(dataLoading, 2000)}

//Asynchronous usuing annonymous function
const taskSix = () => {
    setTimeout(() => {
        console.log("task 6 data looded");
    }, 3000);
}

const taskThree = () => console.log("Task3");
const taskFour = () => console.log("Task4");

taskOne();
taskTwo();
taskThree();
taskFour();
taskSix();
