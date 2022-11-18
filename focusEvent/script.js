//onblur
// onfocus
// onfocusin
// onfocusout

var input = document.querySelector("input");

input.addEventListener("blur",function(e){
    //console.log("bluerd is occured");
    input.style.backgroundColor = "";
    input.style.padding = "";
    console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
});

input.addEventListener("focus",function(){
    //console.log("focus is occured");
    input.style.backgroundColor = "tomato";
    input.style.padding = "2rem";
});
// input.addEventListener("focusin",function(){
//     console.log("focusin is occured");
// });
// input.addEventListener("focusout",function(){
//     console.log("focusout is occured");
// });