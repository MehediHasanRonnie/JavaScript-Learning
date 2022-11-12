
var len = document.querySelectorAll(".myButton").length;

for(var i = 0; i < len; i++){//if we have known numer of button we can use this condition
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
     
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML =  text + " is clicked";
    })
}

