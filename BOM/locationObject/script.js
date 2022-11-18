//BOM (Browser Object Model)
//window object
//location object

console.clear();

// //href
// console.log(location.href);

// //protocol
// console.log(location.protocol);

// //hostname
// console.log(location.hostname);

// //path
// console.log(location.pathname);

// //port
// console.log(location.port);


var locationDiv = document.querySelector(".location-div");

//console.log(locationDiv);

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.hostname;

var p4 = locationDiv.children[3];
p4.textContent = location.pathname;

var p5 = locationDiv.children[4];
p5.textContent = location.port;
//console.log(p1);

const visitButton = document.querySelector("button");

visitButton.addEventListener("click",function(){
    location.assign("https://www.facebook.com ");
});

