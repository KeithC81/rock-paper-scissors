const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
        resultDisplay.style.color = 'orange';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You lost!';
        resultDisplay.style.color = 'red';

    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!';
        resultDisplay.style.color = 'red';
    } 
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!';
        resultDisplay.style.color = 'red';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!';
        resultDisplay.style.color = 'green';
    }
    if (computerChoice === 'paper'  && userChoice === 'rock') {
        result = 'You win!';
        resultDisplay.style.color = 'green';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!';
        resultDisplay.style.color = 'green';
    }
    resultDisplay.innerHTML = result;
}
