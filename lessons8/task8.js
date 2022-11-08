let scores =[5,10,50,70];

function highestsScores(scores){
    let max = scores[0];
    for(let i =1; i< scores.length; i++){
        if(max<scores[i]){
            max = scores[i]
        }
    }
    return max;
}
let maxilum = highestsScores(scores)
console.log(scores);
console.log(maxilum);