// generate a random number to base selection on
computerPlay = () => Math.floor(Math.random() * 2 + 1);

//get the users RPS selection
playerPlay = () => {
    // ask user for their selection 1 2 or 3
    console.log('Will you choose Rock, Paper, or Scissors?');
    let playerNumber = parseInt(prompt('1 for Rock, 2 for Paper, 3 for Scissors'));
    // if a non-valid input is recieved ask the user for a valid input
    if (playerNumber !== 1 && playerNumber !== 2 && playerNumber !== 3) {
            console.log('Please input 1, 2 or 3');
            playerPlay();
    };
    return playerNumber;
};

// ask if they wish to play again
playAgain = () => {
    let response = prompt('play again? Y/N').toLowerCase();
    if (response === 'y') {
        return 1;
    }
    if (response === 'n' || response === null) {
        return 0;
    }
    else {
        console.log('Please respond Y or N')
        return 2;
    }
};

// compare selections to find winner
rockPaperScissors = () => {
    // get computer's selection and the player's selection
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    //compare the two to find the winner
    if (computerSelection === 1) {
        if (playerSelection === 1) {
            console.log('Tie! you both picked rock.');   
        } else if (playerSelection === 2) {
            console.log('You win! you picked paper, and the computer picked rock.');
        } else{
            console.log('You loose! you picked scissors, and the computer picked rock.')
        }
    } else if (computerSelection === 2) {
        if (playerSelection === 1) {
            console.log('You loose! you picked rock, and the computer picked paper.');   
        } else if (playerSelection === 2) {
            console.log('Tie! you both picked paper.');
        } else{
            console.log('You win! you picked scissors, and the computer picked paper.')
        }
    } else {
        if (playerSelection === 1) {
            console.log('You Win! you picked rock, and the computer picked scissors.');   
        } else if (playerSelection === 2) {
            console.log('You loose! you picked paper, and the computer picked scissors.');
        } else{
            console.log('Tie! you both picked scissors.')
        }
    }
    
};

//main function
game = () => {
    //play the game once
    rockPaperScissors();
    //ask if they want to play again
    let keepPlaying = 1;
    while (keepPlaying > 0) {
        keepPlaying = playAgain();
        if (keepPlaying === 1){
            rockPaperScissors();
        };
    };
    console.log('bye!');
};