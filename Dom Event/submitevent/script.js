//finding the elements
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email"); 
const password = form.querySelector("div #password"); 

form.addEventListener("submit",formHandeler)//adding event listener

function formHandeler(e){
    e.preventDefault(); //stutting down the auto refresh
    const userInfo = {
        Name : name.value,
        Email : email.value,
        Password : password.value,
    }
    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value ="";
    
}