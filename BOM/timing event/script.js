//BOM
//setTimeout //setTimeInterval
// console.clear();
// setTimeout(()=>{
//     console.log("hi");
// }), 5000;
// setTimeout(() => {
//     console.log("hi");
// }, 2000);

// setTimeout(display,3000);

// function display(){
//     console.log("Display Function");
// }


const saveButton = document.querySelector(".btn");
const messege = document.querySelector(".messege");

//set time out;
// saveButton.addEventListener("click", function() {
//     messege.textContent = "user name is saved";
//     setTimeout(() => {
//        messege.textContent =""; 
//     }, 2000);
// });

//set time interval

saveButton.addEventListener("click",displayCount);

function displayCount(){
    let count = 1; 
    messege.textContent = count;
        setInterval(() => {
            count++
            messege.textContent = count;
        }, 2000);

}