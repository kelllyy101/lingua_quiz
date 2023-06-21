function startGame() {

}

function setNextQuestion() {

}

function chooseAnswer() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

const questions = [
    {
        question: '',
        answer: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ]
    }
];

document.addEventListener('DOMContentLoaded', function () {
    runMainScreen();
});

/**
 * Set up of game variables to vary display/hide
 */
let mainLoginScreen = document.getElementById("login-screen");
let getInstructions = document.getElementById("instructions-icon");
let displayGuessNumber = document.getElementById("guesses");
let errorMessage = document.getElementById("error-message");
let chooseLevelScreen = document.getElementById("choose-level-screen");
let gameScreen = document.getElementById("game-screen");
let correctScreen = document.getElementById("correct-screen");
let wrongScreen = document.getElementById("wrong-screen");
