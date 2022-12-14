console.clear();

const taskOne = () =>{
    return new Promise((resolve, reject) =>{
        resolve ("task 1 is resolved");
    })
}
const taskTwo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve ("task 2 is resolved");
        }, 2000);
    })
}
const taskThree = () =>{
    return new Promise((resolve, reject) =>{
        reject ("task 3 is not competed");
    })
}
const taskFour = () =>{
    return new Promise((resolve, reject) =>{
        resolve ("task 4 is resolved");
    })
}
 //using promiss chaining
taskOne()
  .then((res) =>console.log(res))
  .then(taskTwo)
  .then((res) =>console.log(res))
  .then(taskThree)
  .then((res) =>console.log(res))
  .then(taskFour)
  .then((res) =>console.log(res))
  .catch((err) => console.log(err))
  
// async and await function on ES6

const callAllFunction = async () => {

    try{
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo();
        console.log(t2);
        const t3 = await taskThree();
        console.log(t3);
        const t4 = await taskFour();
        console.log(t4);
    } catch(e){
        console.log(e);
    }
    
}
callAllFunction();
