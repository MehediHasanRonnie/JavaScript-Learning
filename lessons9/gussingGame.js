// Gussing Game
// guess a number from 1 to 5
//generate a random number between 1 to 5
//if guess number matches random number;then show message won else lost
//run the game for 5 times
//show the number of won and lost

var numOfWon = 0;
var numOfLost = 0;

for (var i =1; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a number between 1 to 5 :"));

    var randomNumber = Math.floor(Math.random()*5) + 1;
    
    if(guessNumber == randomNumber){
        document.write("You have own! </br/>");
         numOfWon++;   
    }else{
        document.write("You hav lost,random number was"+ randomNumber +"<br/>");
        numOfLost++;
    }
}
document.write(" Total Number of won = "+ numOfWon + "</br>");
document.write("Total Number of lost = "+ numOfLost + "</br>");

