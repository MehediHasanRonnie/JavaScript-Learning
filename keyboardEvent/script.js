// 1.keydown
// 3.keyup
// 2.keypress

var textarea = document.querySelector('textarea');

textarea.addEventListener("keydown",function(e){
    if(e.repeat){
        alert("don't repeat");
    }
});
// textarea.addEventListener("keypress",function(){
//     console.log("keypressed");
// });
//textarea.addEventListener("keyup",function(e){
   // console.log(e.shiftKey);
// });