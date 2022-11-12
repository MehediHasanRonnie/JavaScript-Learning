for(var i = 0; i < 3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
      
    });
}

function audioPlay(text){
    switch(text){
        case "Audio1":
            var audio = new Audio("audio/a.wav");
            audio.play();
            break;
        case "Audio2":
            var audio = new Audio("audio/b.wav");
            audio.play();
            break;
        case "Audio3":
            var audio = new Audio("audio/c.wav");
            audio.play();
            break;
      }
}
