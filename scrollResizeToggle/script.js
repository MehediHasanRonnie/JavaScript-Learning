//load unload
//scroll
//resize
//toggle


//load unload

window.addEventListener('load',function(){
    console.log("load");
});

window.addEventListener('unload',function(){
    console.log("unload");
});

//scroll event

window.addEventListener("scroll",function(){
    console.log("scroll");
});

//resize

window.addEventListener("resize",function(){
    console.log("resize");
    const width = window.outerWidth;
    const height = window.outerHeight;

    console.log(`height: ${height}, width: ${width}`);
});
//Toggle

const details = document.querySelector("details");

details.addEventListener('toggle',function(e){
 console.log('toggle');
 console.log(e.target.open);
});