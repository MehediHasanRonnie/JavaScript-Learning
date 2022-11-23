//es6 class
console.clear();
class Student {
    constructor(id, name){
        this.id = id;
        this.name =name;
    }

    set studentName(name){
        this.name = name;
    }

    get studentInfo(){
        return this.id + " " + this.name;
    }
}
let info = new Student(101,"Mehedi");

console.log(info.studentInfo);

console.log(info);

info.studentName = "hasan";
console.log(info.name);