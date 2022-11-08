//looping an array
// var num = [10,20,30,40,50]

// var i =0;
// do{
//     console.log(num[i]);
//     i++;
// }while(i<5);

//insert array from user andd add them;

var num = new Array();

for( var i = 0; i < 5; i++){
    num[i] = parseInt(prompt("Enter your number:"));
    console.log(num[i]);
}
var sum = 0;

for (var i = 0; i < 5; i++){
    sum = sum + num[i];
}
console.log(sum);
