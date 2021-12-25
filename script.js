// generate a random number to base selection on
computerPlay = () => Math.floor(Math.random() * 3) + 1;

//get the users RPS selection
playerPlay = () => {
    // ask user for their selection 1 2 or 3
    console.log('Will you choose Rock, Paper, or Scissors?');
    return parseInt(prompt('1 for Rock, 2 for Paper, 3 for Scissors'));
};

// ask if they wish to play again
playAgain = () => {
    let response = prompt('play again? Y/N').toLowerCase();
    if (response === 'y') {
        return 1;
    } if (response === 'n' || response === null) {
        return 0;
    } else {
        console.log('Please respond Y or N')
        return 2;
    }
};

// compare selections to find winner
rockPaperScissors = () => {
    // get computer's selection and the player's selection
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    // if a non-valid playerSelection is recieved ask the user for a valid input
    while (playerSelection !== 1 && playerSelection !== 2 && playerSelection !== 3) {
        console.log('Please input 1, 2 or 3');
        playerSelection = playerPlay();
    };

    //compare the two to find the winner
    if (computerSelection === 1) {
        if (playerSelection === 1) {
            console.log('Tie! you both picked rock.');
            return 0;
        } else if (playerSelection === 2) {
            console.log('You win! you picked paper, and the computer picked rock.');
            return 2;
        } else{
            console.log('You loose! you picked scissors, and the computer picked rock.');
            return 1;
        }
    } else if (computerSelection === 2) {
        if (playerSelection === 1) {
            console.log('You loose! you picked rock, and the computer picked paper.');   
            return 1;
        } else if (playerSelection === 2) {
            console.log('Tie! you both picked paper.');
            return 0;
        } else{
            console.log('You win! you picked scissors, and the computer picked paper.');
            return 2;
        }
    } else {
        if (playerSelection === 1) {
            console.log('You Win! you picked rock, and the computer picked scissors.');
            return 2;
        } else if (playerSelection === 2) {
            console.log('You loose! you picked paper, and the computer picked scissors.');
            return 1;
        } else{
            console.log('Tie! you both picked scissors.');
            return 0;
        }
    }
};
//play the game to a best of 5
play = () => {
    let computerScore = 0;
    let playerScore = 0;
    // play until someone has won 3 times
    while (playerScore !== 3 && computerScore !== 3) {
        let winner = rockPaperScissors();
        if (winner === 0) {
            continue;
        } else if (winner === 1) {
            computerScore++;
        } else {
            playerScore++;
        }
        // tell the player the score and if they won or lost
        let endText = '';
        if (playerScore === 3){
            endText = 'You Win!';
        } else if (computerScore === 3) {
            endText = 'You Lose!';
        } else {
            endText = 'The first to 3 wins!';
        }
        console.log (`You have won: ${playerScore}. The Computer has won: ${computerScore}. ` + endText);
    };
};


//main function
game = () => {
    //play the game
    play();
    //ask if they want to play again
    let keepPlaying = 1;
    while (keepPlaying > 0) {
        keepPlaying = playAgain();
        if (keepPlaying === 1){
            play();
        };
    };
    console.log('bye!');
};