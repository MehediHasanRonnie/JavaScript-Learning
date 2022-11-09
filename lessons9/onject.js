// creating an object

var student1 ={
    name : 'Mehedi hasan',
    age : 26,
    cgpa : 3.82,
    lang : ['bangla','english','hindi']
};
console.log(student1.lang)

//constractor function to create js object

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    //creating a function to display object all together
    this.display = function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
};
var student1 = new Student('Mehedi Hasan',26,3.82,['bangla','English','hindi']);
var student2 = new Student('Ronnie',25,3.82,['spenish','English','hindi']);

student1.display();
student2.display();