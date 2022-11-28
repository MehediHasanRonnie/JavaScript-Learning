//usuing sessionstorage for string
 //setItem(key,value)

// sessionStorage.setItem("user","mehedi");


// //getItem(key)

// const userName = sessionStorage.getItem('user');
// console.log(userName);

// //removeItem

// sessionStorage.removeItem('user');
// sessionStorage.clear()//to clear items


// usiging session storage for object

const user = {id: 1010, name: "kaibl"}

sessionStorage.setItem("user", JSON.stringify(user));

//get item

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);