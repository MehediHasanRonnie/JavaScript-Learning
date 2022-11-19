//javascript clock

var saveButton = document.querySelector(".btn");
var time = document.querySelector(".time");


saveButton.addEventListener("click",setClock);

function setClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    let clock = hours + ":" + minutes +":"+ seconds;
    time.textContent = clock;

    setInterval(setClock,1000);
}

function formatTime(value){
    if(value <10){
        value = "0"+ value;
    }
    return value;
}