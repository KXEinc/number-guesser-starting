let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Check user input for be in a limit(0-9) and retur Targetnum or Alert with stop condition.
const generateTarget = (currentHumanGuess) => {
    if (currentHumanGuess < 10 && currentHumanGuess >= 0) {
        return Math.floor(Math.random() * 10);
    } else {
        alert('Wrong input! Your number should be between 0 and 9!');
        return false;
    }
};
//get absolute distance between target and input
const getAbsoluteDistance = (input, target) => {
    return Math.abs(target - input);
};
//Chech who win and return it (if coputer and human have the same number => human win)
const compareGuesses = (human, computer, target) => {
    if (human == computer) {
        return true;
    } else if (getAbsoluteDistance(human, target) < getAbsoluteDistance(computer, target)) {
        return true;
    } else {
        return false;
    }
};
//Update winner's score
const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
};
//Increase the round number counter
const advanceRound = () => {
    currentRoundNumber++;
};