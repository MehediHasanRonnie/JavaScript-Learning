var names = ["jamil","kamil","Aku"];

names.push("khabil"); //push method
names.unshift("akash"); //unshift method
names.shift();
names.pop();
names.splice(1,0,"pony","tail","jhon","wick");
//names.splice(1,2);

console.log(names);
var newArray = names.slice(1,3);
console.log(newArray);

var sortName = names.sort();
names.reverse();
console.log(sortName);

//number sorting;

var numbers = [10,20,30,40,50,1,4,3,8]
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers)