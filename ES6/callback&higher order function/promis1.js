//javaScript promiss

console.log("wellcome");

const promise1 = new Promise((resolve,reject) =>{
    let completePromise = true;
    if(completePromise){
        resolve("completed promise 1");
    }else{
        reject("not completed promise 1");
    }
})

const promise2 = new Promise((resolve,reject) =>{
    resolve("completed promiss two");
})

//console.log(promise1);

promise1
.then((res) =>{
    console.log(res);
})
.catch((arr) =>{
    console.log(arr);
})

promise2.then((res) => console.log(res));

//print multiple promiss in an array.
// Promise.all([promise1,promise2])
// .then((res) => console.log(res));

//usuing disstructuring method
//Promise.all([promise1,promise2]).then(([res1,res2]) => console.log(res1,res2));

// promise.race

const promise3 = new Promise((resolve,reject)=>{
          setTimeout(() => {
            resolve("completed promise3");
          }, 2000);
});
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("completed promise4");
    }, 1000);
});

Promise.race([promise3,promise4]).then((res) => console.log(res));
