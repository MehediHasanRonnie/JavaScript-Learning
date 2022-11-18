// audio / vedio events
//canplay,play,playing,pause,progress,ended,volumechange,waiting.

var video = document.querySelector("video");

video.addEventListener("canpaly", canplayEvent);

function canplayEvent(){
    console.log("canplay");
}
// video.addEventListener("paly", playEvent);

// function playEvent(e){
//     console.log("play")
// }
video.addEventListener("paly", function(){
    console.log("play");
});
// video.addEventListener("palying", function(){
//     console.log("playing");
// });
// video.addEventListener("pause", function(){
//     console.log("pause");
// });