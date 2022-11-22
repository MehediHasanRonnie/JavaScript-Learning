console.clear();
//find(callback,value)return the value of the first element that pass certain condition
let number =[ 3,5,12,17,18];

//let firstEvenNumber = number.find(x => x%2 ===0); //1st process

const evenNumber = (value,index,array) =>{
    if(value%2===0)
    return value;
}
let firstEvenNumber = number.find(evenNumber);
let firstEvenNumberIndex = number.findIndex(evenNumber);
console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);

//findIndex(callback,value)return the value of the first element that pass certain condition