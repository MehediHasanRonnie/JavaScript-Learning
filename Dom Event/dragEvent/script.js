//DragEventObject
//ondragStart
//ondrag
//ondragend
//ondragenter
//ondragleave
//ondragover
//ondrop

const div = document.querySelector("div");
const p = document.querySelector("p");

p.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("text",e.target.id);//drag will be working
});
div.addEventListener("dragover",function(e){
    e.preventDefault();
});

div.addEventListener("drop",function(e){
    let id = e.dataTransfer.getData("text");
    div.appendChild(document.getElementById(id));
    e.preventDefault();
});