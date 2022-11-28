
//setItem(key,value) in string formate.

localStorage.setItem("userName","Ronnie Hasan");
localStorage.setItem("password","012345678");

//getitem(key)

const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");

console.log(userName,userPassword);

//removeItem()
localStorage.removeItem("password");


///if not string country.. or a set of array.
//setItem(key,value);
const countries = ['Australia','Bangladesh','Nepal'];
localStorage.setItem("countries", JSON.stringify(countries));

//getItem(key)
const countrisList = JSON.parse(localStorage.getItem("countries"));

console.log(countrisList);

//we can clear anything by the method clear

localStorage.clear();

