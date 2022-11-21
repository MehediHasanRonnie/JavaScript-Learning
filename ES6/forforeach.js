//for  vs foreach

//for
console.clear();
const numbers = [10,20,30,40,50];

for( let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
}
 //for each loop
const numbers = [10,20,30,40,50];

numbers.forEach(numberfunc);

function numberfunc(x){
console.log(x)
}

//squirenumber usuing for each loop

const numbers = [10,20,30,40,50];
var squirenumber =[]
numbers.forEach(function(x){
  squirenumber.push(x*x);
})
console.log(squirenumber);

//if i want every number got +5 added,how can i do that.

const numbers = [5,6,7,8,9,10];

numbers.forEach(function(i,index,array){
    array[index] = i+5;
})
console.log(numbers);