//ouse event wouldn't work on-<html>,<head>
// <meta>,<title>,<br>,<style>,<script>,<iframe>,
// param,<base>,<bdo>
//mouse event will work on
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmouseup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

//console.clear();
var div = document.querySelector("div");


// div.addEventListener("click",function(e) {
//     // console.log("clicked");
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.innerHTML);
//     //console.log(e.target.textContent);
//     console.log(e.target.innerText);



// });

// div.addEventListener('dblclick', function() { 
//     console.log("doubble clicked");
// });

// div.addEventListener("mouseup", function() { 
//     console.log("mouseup occured");
// });
// div.addEventListener("mousedown", function() { 
//     console.log("mousedown occured");
// });
// div.addEventListener("mouseenter", function() { 
//     console.log("mouseenter occured");
// });
// div.addEventListener("mouseleave", function() { 
//     console.log("mouseleave occured");
// });
// div.addEventListener("mousemove", function(e) { 
//     //console.log("mousemove occured");
//     //console.log("clientX = "+ e.clientX + "  clientY = " +e.clientY); //comparing with the client
//     console.log("offsetX = "+ e.offsetX + "  offsetY = " +e.offsetY); //comparing with the offset
// });

// div.addEventListener("mouseover", function() { 
//     console.log("mouselemover occured");
// });

//button mouseClick

var buttons = document.querySelectorAll(".btn");
//console.log(buttons);

Array.from(buttons).map((button) => {
    button.addEventListener("click",function(e){
        console.log(e.target.innerText);
    });
});