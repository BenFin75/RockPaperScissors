//set initial state
let gameMode;
let computerScore = 0;
let playerScore = 0;

//get number of games from page name
switch (document.title) {
    case "Best of 5 Duel!":
        gameMode = 5;
        break;
    case "Best of 7 Duel!":
        gameMode = 7;
        break;
    case "Zen Mode!":
        gameMode = 0;
        break;
}
//css selectors
main = document.querySelector('main');
buttons = document.querySelector('.buttons');
resultPara = document.createElement('p');
scorePara = document.createElement('p');
playAgain = document.createElement('input');
playAgain.type = 'submit';
playAgain.classList.add('gameButton');
playAgain.onclick = function () {window.location.reload()};
playAgain.value = 'Play Again?';

//compare selections
rockPaperScissors = (playerSelection) => {
    // get computer's selection
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    //compare the two to find the winner
    if (computerSelection === 1) {
        if (playerSelection === 1) {
            resultPara.textContent = 'Tie! you both picked rock.';
            return 0;
        } else if (playerSelection === 2) {
            resultPara.textContent = 'You win! you picked paper, and the computer picked rock.';
            return 2;
        } else{
            resultPara.textContent = 'You lose! you picked scissors, and the computer picked rock.';
            return 1;
        }
    } else if (computerSelection === 2) {
        if (playerSelection === 1) {
            resultPara.textContent = 'You lose! you picked rock, and the computer picked paper.';   
            return 1;
        } else if (playerSelection === 2) {
            resultPara.textContent = 'Tie! you both picked paper.';
            return 0;
        } else{
            resultPara.textContent = 'You win! you picked scissors, and the computer picked paper.';
            return 2;
        }
    } else {
        if (playerSelection === 1) {
            resultPara.textContent = 'You win! you picked rock, and the computer picked scissors.';
            return 2;
        } else if (playerSelection === 2) {
            resultPara.textContent = 'You lose! you picked paper, and the computer picked scissors.';
            return 1;
        } else{
            resultPara.textContent = 'Tie! you both picked scissors.';
            return 0;
        }
    }
};

//play the game to the desiered outcome
play = (playerSelection) => {
    
    // play until someone has won 3 times
    if (gameMode !== 0){
            let winner = rockPaperScissors(playerSelection);
            if (winner === 1) {
                computerScore++;
            } else if (winner === 2) {
                playerScore++;
            }
            // tell the player the score and if they won or lost
            let endText = '';
            if (playerScore === gameMode){
                endText = 'You Win!';
            } else if (computerScore === gameMode) {
                endText = 'You Lose!';
            } else {
                endText = `The first to ${gameMode} wins!`;
            }
            scorePara.textContent = `You have won: ${playerScore}. The Computer has won: ${computerScore}. ` + endText;
            if (computerScore === gameMode || playerScore === gameMode) {
                buttons.remove();
                main.appendChild(playAgain);
            }
            main.appendChild(resultPara, buttons);
            main.appendChild(scorePara, buttons);

    } else {
        let winner = rockPaperScissors(playerSelection);
        if (winner === 1) {
            computerScore++;
        } else if (winner === 2) {
            playerScore++;
        }
        scorePara.textContent = `You have won: ${playerScore}. The Computer has won: ${computerScore}. `;
        main.appendChild(resultPara, buttons);
        main.appendChild(scorePara, buttons);
        }
};

//play the game when a button is clicked
function game (e) {
    //get players choice from the button
    let playerSelection;
    switch (e.target.value) {
        case "Rock":
            playerSelection = 1;
            break;
        case "Paper":
            playerSelection = 2;
            break;
        case "Scissors":
            playerSelection = 3;
            break
    };
    play(playerSelection);
};

//add listener for rock, paper, and sissors buttions

gameButtons = document.querySelectorAll('.gameButton')
gameButtons.forEach(button => {button.addEventListener('click', game)});