//error handeling usuing throw

document.querySelector("#checkButton").addEventListener("click",function(){
   var num = document.querySelector("#numTextfield").value;
   
   try {
    if(num < 5){
        throw "input is too low!";
    }else if(num>10){
        throw "number is too high!"
    }
   } catch (error) {
    console.log(error);
   }finally{
    console.log(num);
   }
})