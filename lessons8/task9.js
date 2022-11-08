// two dimentional array

// var info = [["mehedi",26],["hasan",23],['ronnie',24]];

// for(var i = 0; i<info.length; i++){
//     for(var j = 0; j<info.length;j++){
//         console.log(info[1][1]);
//     }
// };

//task 9
//create a function called heighstRunScorer
//2D array
//bessed on height score,return the name of the player

let  info = [["mehedi",50],["hasan",70],['ronnie',80],['dikson',99]];

function heighstRunScorer(score){
    let maxScore = info[0][1];  //taking initial max sore as 0'th osition
    let maxScorePlayer = info[0][0];

    for(var i = 0; i<info.length; i++){
        for(var j = 0; j<info.length;j++){
             if(maxScore <info[i][j]){
                maxScore = info[i][j];
                maxScorePlayer = info[i][0];
             }
        }
 }
 return maxScorePlayer;
}

let result = heighstRunScorer(info);
console.log(result);