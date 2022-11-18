//oncopy
//oncut
//onpaste

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy",function(){
   p.innerText = "you coppied text";
});
input.addEventListener("cut",function(){
    console.log("thext is cut");
});
input.addEventListener("paste",function(){
    console.log("thext is pasted");
})