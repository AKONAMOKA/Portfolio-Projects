let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10 + 1);
}
function getAbsoluteDistance(number,funcTarget){
    if (number < 0 || number > 10){
        alert('Гей ебаный, ты число ебанутое ввел');
    }else{
        return Math.abs(funcTarget - number);
    }
}
function compareGuesses( human, computer, Target){
    let humanDif = getAbsoluteDistance(human, Target);
    let compDif = getAbsoluteDistance(computer, Target);
    if (humanDif < compDif){
        return true;
    } else if (compDif < humanDif){
        return false;
    }else if (compDif === humanDif){
        return true;
    }

}
function  updateScore(winner){
    switch(winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}
