//adding keypress listener and showing the test on browser;
// document.addEventListener("keypress",function(event){
//     var text = event.key;
//     document.querySelector("p").innerHTML = "You have pressed: " + text;
// });


//adding the number of character printed on the text area.
var count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "You have pressed: " + count + "character";
});