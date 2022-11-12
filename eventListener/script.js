//click event
//annonymous Functions
document.querySelector("button").addEventListener("click", function(){
    alert("Hello");
});

//Mouseover function;
var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover",function(){
      myVar.classList.add("my-style");
});
myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("my-style");
});