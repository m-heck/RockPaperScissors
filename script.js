/* 0 is rock, 1 is paper, 2 is scissors */
const computerPlay = function() {
    switch (getRandomInt(0,3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/* 0 for tie, 1 for win, 2 for lose */
const playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let gameState = 0;
    if (playerSelection == computerSelection) {return 0};
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {gameState = 2;}
            else {gameState = 1;}
            break;
        case "paper":
            if (computerSelection === "rock") {gameState = 1;}
            else {gameState = 2;}
            break;
        case "scissors":
            if (computerSelection === "rock") {gameState = 2;}
            else {gameState = 1}
            break;
        default:
            return -1;
            break;
    }

    return gameState;
        
}

function game() {
    console.log("Are you ready to play some rock, paper, scissors?");
    
    console.log("Let's begin!");
    

    let winNum = 0;
    let roundNum = 1;
    let ties = 0;
    let losses = 0;

    console.log(`Let's begin round ${roundNum}`);
    
    let playerSelection = window.prompt("Rock, paper, or scissors?");     
    let computerSelection = computerPlay();
    console.log(`Player selection: ${playerSelection}; Computer Selection: ${computerSelection}`);
    switch (playRound(playerSelection, computerSelection)) {
        case 0:
            console.log(`It is a tie! You both played ${playerSelection}`);
            ties++;
            break;
        case 1:
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            winNum++;
            break;
        case 2:
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            losses++;
            break;
        case -1:
            console.log("There was an error. Please enter a valid number.");
            i--;
            continue;
    console.log(`You have ${winNum} wins.`);

    console.log("The five games are over.");
    console.log(`You had a total of ${winNum} wins, ${ties} ties, and ${losses} losses.`);
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

game();
