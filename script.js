//randomly choose selection for computer
function computerPlay(){
    let randomSelection = Math.floor(Math.random() * 3)
    let computerSelection;

    switch (randomSelection){
        case 0:
            computerSelection = "rock";
            break;
        
        case 1:
            computerSelection = "paper";
            break;
        
        case 2:
            computerSelection = "scissors";
            break;
    }
    
    return computerSelection;
}

//plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){    
    let message;

    switch (playerSelection.toLowerCase()){
        case "rock":

            if (computerSelection === "rock"){
                message = "You both chose Rock";
            }

            else if (computerSelection === "paper"){
                message = "Paper beats Rock";
                compWins++;
            }

            else {
                message = "Rock beats Scissors";
                playerWins++;
            }
            rounds++;
            break;
        
        case "paper":

            if (computerSelection === "rock"){
                message = "Paper beats Rock";
                playerWins++;
            }
    
            else if (computerSelection === "paper"){
                message = "You both chose paper";
            }
    
            else {
                message = "Scissors beats Paper";
                compWins++;
            }
            rounds++;
            break;

        case "scissors":

            if (computerSelection === "rock"){
                message = "Rock beats Scissors";
                compWins++;
            }

            else if (computerSelection === "paper"){
                message = "Scissors beats Paper";
                playerWins++;
            }

            else {
                message = "You both chose Scissors";
            }
            rounds++;
            break;
    }
    return message;
}

function game(playerChoice){
    if (rounds === 0){
        initilizer();
    }
    console.log(playRound(playerChoice, computerPlay()));
    console.log(`Round ${rounds}\nPlayer: ${playerWins} Computer: ${compWins}`);
    if (playerWins === 5 || compWins === 5){
        winDisplay();
        initilizer();
    }
}

function winDisplay(){
    playerWins > compWins ? console.log("You win!") : console.log("You lose!");
}

function initilizer(){
    rounds = 0;
    playerWins = 0;
    compWins = 0;
}

//initilzation
let rounds = 0;
let playerWins = 0;
let compWins = 0;