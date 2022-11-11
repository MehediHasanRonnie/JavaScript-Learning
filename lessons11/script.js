//add child in lower position usuing javascript
var heading3 = document.createElement("h1");
var text = document.createTextNode("This is javscript Heading");
heading3.appendChild(text);

var myDiv = document.querySelector(".my-div");
myDiv.appendChild(heading3);

//remove child usuing javascript
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.removeChild(heading1);

//add child in upper position usiing javascript

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("this is js heading 0");
heading0.appendChild(text0);
//yDiv.appendChild(heading0);

var heading2 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0,heading2);