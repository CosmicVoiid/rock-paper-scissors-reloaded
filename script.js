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
    game_info.textContent = message;
}

function game(playerChoice){
    if (rounds === 0){
        initilizer();
        wl_info.textContent = " ";
    }
    console.log(playRound(playerChoice, computerPlay()));
    round.textContent = `Round ${rounds}`;
    player.textContent = `Player: ${playerWins}`;
    opponent.textContent = `Opponent: ${compWins}`;
    console.log(`Round ${rounds}\nPlayer: ${playerWins} Computer: ${compWins}`);
    if (playerWins === 5 || compWins === 5){
        winDisplay();
        initilizer();
    }
}

function winDisplay(){
    playerWins > compWins ? wl_info.textContent = "You win!" : wl_info.textContent = 
    "You lose!";
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

//DOM
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const round = document.querySelector("#round");
const player = document.querySelector("#player");
const opponent = document.querySelector("#opponent");
const game_info = document.querySelector("#game-info");
const wl_info = document.querySelector("#wl-info");

rock.addEventListener("click", function(){game("rock")});
paper.addEventListener("click", function(){game("paper")});
scissors.addEventListener("click", function(){game("scissors")});

