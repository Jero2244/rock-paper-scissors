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
    let choice = options[Math.floor(Math.random()*options.length)];  //it randomly selects from options and stores it in choice
    return choice;
}


function playRound(playerSelection, computerPlay){

    if (playerSelection =='rock' && computerPlay == 'paper'){  //everything below puts playerSelection against computerPlay with game's rules to see who won
        return `You lost. ${playerSelection} does not beat ${computerPlay}`
    }else if (playerSelection =='rock' && computerPlay == 'scissors'){
        return `You won. ${playerSelection} beats ${computerPlay}`
    }else if (playerSelection =='scissors' && computerPlay == 'paper'){
        return `You won. ${playerSelection} beats ${computerPlay}`
    }else if (playerSelection =='scissors' && computerPlay == 'rock'){
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
        let computerSelection = computerPlay(); // calls for computerPlay ro get the choice of the computer 
        let playerSelection = prompt('Choose Rock, Paper, Scissors') //playerSelection makes the player choose 
        playerSelection = playerSelection.toLowerCase() // converts it to lower case for easier if statements in playRound
        round = playRound(playerSelection, computerSelection);
        console.log(round) //prints the return of playRound
        if(round.startsWith('You won')){ //keeps score checking the string of playRound to see who won 
            winnerUser++
        }else if(round.startsWith('You lost')){
            winnerComputer++
        }

        if (winnerComputer == 3 || winnerUser == 3 ||i == 4){           //need a way to declare a winner
            if(winnerComputer == 3){
                return('You lost the game')
            }else if(winnerUser == 3){
                return 'You won the game'
            }else{
                return 'It is a tie'
            }
        }
    }
}



let endResult = game();
console.log(endResult)



// console.log(playRound(playerSelection, computerSelection))

