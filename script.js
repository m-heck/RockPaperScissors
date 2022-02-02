let wins = 0;
let ties = 0;
let losses = 0;
const buttons = document.querySelectorAll('.button-container>button');

function computerPlay() {
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
const playRound = function(playerSelection) {

    let computerSelection = computerPlay();
    playerMove = document.querySelector('.playerMove');
    computerMove = document.querySelector('.computerMove');
    console.log("play Round");
    playerSelection = playerSelection.toLowerCase();
    let gameState = 0;
    if (playerSelection == computerSelection) {
        if (playerSelection == 'paper') {
            playerMove.innerHTML = '<img src="paper.png" alt="Image of paper" width="200" max-width: 10vw flex-shrink: 2>';
            computerMove.innerHTML = '<img src="paper.png" alt="Image of paper" width="200" max-width: 10vw flex-shrink: 2>';
        } else if (playerSelection == 'scissors') {
            playerMove.innerHTML = '<img src="scissors.png" alt="Image of a scissors" width="200" max-width: 10vw flex-shrink: 2>';
            computerMove.innerHTML = '<img src="scissors.png" alt="Image of scissors" width="200" max-width: 10vw flex-shrink: 2>';
        } else {
            playerMove.innerHTML = '<img src="rock.png" alt="Image of a rock" width="200" max-width: 10vw flex-shrink: 2>';
            computerMove.innerHTML = '<img src="rock.png" alt="Image of a rock" width="200" max-width: 10vw flex-shrink: 2>';
        }
        
        return 0;
    };
    switch (playerSelection) {
        case "rock":
            playerMove.innerHTML = '<img src="rock.png" alt="Image of a rock" width="200" max-width: 10vw flex-shrink: 2>';
            if (computerSelection === "paper") {
                gameState = 2;
                computerMove.innerHTML = '<img src="paper.png" alt="Image of paper" width="200" max-width: 10vw flex-shrink: 2>';
            }
            else {
                gameState = 1;
                computerMove.innerHTML = '<img src="scissors.png" alt="Image of scissors" width="200" max-width: 10vw flex-shrink: 2>';
            }
            break;
        case "paper":
            playerMove.innerHTML = '<img src="paper.png" alt="Image of paper" width="200" max-width: 10vw flex-shrink: 2>';
            if (computerSelection === "rock") {
                gameState = 1;
                computerMove.innerHTML = '<img src="rock.png" alt="Image of a rock" width="200" max-width: 10vw flex-shrink: 2>';
            }
            else {
                gameState = 2;
                computerMove.innerHTML = '<img src="scissors.png" alt="Image of scissors" width="200" max-width: 10vw flex-shrink: 2>';
            }
            break;
        case "scissors":
            playerMove.innerHTML = '<img src="scissors.png" alt="Image of a scissors" width="200" max-width: 10vw flex-shrink: 2>';
            if (computerSelection === "rock") {
                gameState = 2;
                computerMove.innerHTML = '<img src="rock.png" alt="Image of a rock" width="200" max-width: 10vw flex-shrink: 2>';}
            else {
                gameState = 1;
                computerMove.innerHTML = '<img src="paper.png" alt="Image of paper" width="200" max-width: 10vw flex-shrink: 2>';
            }
            break;
        default:
            return -1;
    }
    return gameState;
        
}

buttons.forEach(button => button.addEventListener('click', (e) => {
    const winText = document.querySelector('.wins');
    const tieText = document.querySelector('.ties');
    const lossText = document.querySelector('.losses');

    playerChoice = button.className;
    let result = playRound(playerChoice);
    if (result == 0) {
        ties++;
    } else if (result == 1) {
        wins++;
    } else if (result == 2) {
        losses++;
    }
    tieText.textContent = `Ties: ${ties}`;
    winText.textContent = `Wins: ${wins}`;
    lossText.textContent = `Losses: ${losses}`;
    if (losses >= 5 || wins >= 5) {
        if (losses > wins) {
            tieText.textContent = `You lost! :( The computer reached 5 first...`;
        } else {
            tieText.textContent = `You won! :) You reached 5 first!`;
        }
        winText.textContent = ``;
        winText.style.cssText = 'background-color: #EEE9E3';
        lossText.textContent = ``;
        lossText.style.cssText = 'background-color: #EEE9E3';
        wins = 0;
        ties = 0;
        losses = 0;
    } else {
        winText.style.cssText = 'background-color: #d6bfa865';
        lossText.style.cssText = 'background-color: #d6bfa865';
    }
    console.log(`returned ${result}`);

}));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function wait() {
    setTimeout(() => {  console.log("Waiting 1000ms!"); }, 1000);
}
