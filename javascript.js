// function computerPlay
//     random return 'rock' 'paper' 'scissors'
// playerSelection requires input from the user and not keep it case sensitive
// playRound(playerSelection, computerSelection)
//  returns a string that declares winner and looser


// function game(probably includes all of above)
//  keeps a score and the number of rounds
//      (two?)variable that keeps track of how many rounds have each won

function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
function playRound(playerSelection, computerPlay){
    if (playerSelection =='rocks' && computerPlay == 'paper'){
        return `You lost. ${playerSelection} does not beat ${computerPlay}`
    }else if (playerSelection =='rocks' && computerPlay == 'scissors'){
        return `You won. ${playerSelection} beats ${computerPlay}`
    }else if (playerSelection =='scissors' && computerPlay == 'paper'){
        return `You won. ${playerSelection} beats ${computerPlay}`
    }else if (playerSelection =='scissors' && computerPlay == 'rocks'){
        return `You lost. ${playerSelection} does not beat ${computerPlay}`
    }else if (playerSelection =='paper' && computerPlay == 'rock'){
        return `You won. ${playerSelection} beats ${computerPlay}`
    }if (playerSelection =='paper' && computerPlay == 'scissors'){
        return `You lost. ${playerSelection} does not beat ${computerPlay}`
    }else{
        return 'It is a tie'
    }
}

function game(){
    let round;
    let winnerComputer = 0;
    let winnerUser = 0
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose Rock, Paper, Scissors')
        playerSelection = playerSelection.toLowerCase()
        round = playRound(playerSelection, computerSelection);
        console.log(round)
        if(round.startsWith('You won')){
            winnerUser++
        }else if(round.startsWith('You lost')){
            winnerComputer++
        }
        if (winnerComputer == 3 || winnerUser == 3){
            return
        }

    }
}



game();


// console.log(playRound(playerSelection, computerSelection))

