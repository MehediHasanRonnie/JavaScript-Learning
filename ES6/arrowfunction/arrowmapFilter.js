//create an object about student information and see who's score is more the 3.
console.clear();
const students = [
    {
        id : 101,
        name : "mehedi hasan",
        cgpa :3.45
    },
    {
        id : 102,
        name : "Rahomot",
        cgpa : 2.45
    },
    {
        id : 103,
        name : "Robin",
        cgpa : 2.15
    },
    {
        id : 104,
        name : "kamil",
        cgpa :4.25
    }
    
];
//arrow function
const studentName2 = () => students.filter((x) => x.cgpa < 3).map((y) => y.name);

console.log(studentName2());

//traditional function
function studentNames(){
   return students.filter(function(x){
        return x.cgpa > 3
    }).map(function(y){
        return y.name;
    });
}
console.log(studentNames());
