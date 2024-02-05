/* jshint esversion: 6 */
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const tionElement = document.getElementById('tion');
const answerButtonsElement = document.getElementById('answer-buttons');
const chooseLevelScreen = document.getElementById('choose-level-screen');
const difficultyBeginnerBtn = document.getElementById('beginner-btn');
const difficultyIntermediateBtn = document.getElementById('intermediate-btn');
const difficultyAdvancedBtn = document.getElementById('advanced-btn');
const tionContainer = document.getElementById('tion-box');
const tionContainerElement = document.getElementById('tion-container');
const scoreMessage = document.getElementById('score-message');
let timeLeft = document.querySelector(".time-left");
let count = 10;
let countdown;
document.getElementById("user-log").addEventListener("click", checkUsername);

function checkUsername() {
    let username = document.getElementById("user").value.trim();
    let errorMessage = document.getElementById("error-message");
    let chooseDifficulty = document.getElementById("username");
    chooseDifficulty.innerText = `${username}, are you ready to learn English?`;
    if (username.length > 0 && username.length <= 12) {
        chooseLevelScreen.style.display = "block";
        document.getElementById('mainLoginScreen').style.display = "none";
        errorMessage.style.display = "none";
        document.getElementById("user").value = username;
    } else {
        errorMessage.style.display = 'block';
        document.getElementById("user").focus();
        document.getElementById("user").value = "";
    }
}


document.getElementById("user").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkUsername();
    }
});

const beginnertions = [
    {
        tion: "Como te llamas?",
        answers: [
            { text: "Mi llamo es Ken", correct: false },
            { text: "Mi nombre son Ken", correct: false },
            { text: "Me llamo Ken", correct: true },
            { text: "Me llamas Ken", correct: false }
        ]
    },
    {
        tion: "Donde vives?",
        answers: [
            { text: "Vives en Cork", correct: false },
            { text: "Vivo en Cork", correct: true },
            { text: "Vivas en Cork", correct: false },
            { text: "Viva en Cork", correct: false }
        ]
    },
    {
        tion: "Cuantos años tienes?",
        answers: [
            { text: "Tengo 58", correct: false },
            { text: "Tienes 58 año", correct: false },
            { text: "Tengo 58 años", correct: true },
            { text: "Eu tengo 58 años", correct: false }
        ]
    },
    {
        tion: "Como estas?.",
        answers: [
            { text: "Soy cansado", correct: false },
            { text: "Estoy bien", correct: true },
            { text: "Estas muy bien", correct: false },
            { text: "Estamos mal", correct: false }
        ]
    },
    {
        tion: 'De donde eres?',
        answers: [
            { text: 'Soy de Irlanda', correct: true },
            { text: 'Eres de Irlanda', correct: false },
            { text: 'Estoy de Irlanda', correct: false },
            { text: 'Ero de Irlanda', correct: false },
        ]
    },
    {
        tion: 'Estas casado? Tienes hijos?',
        answers: [
            { text: 'Chair', correct: false },
            { text: 'Estoy casado y tengo dos hijos', correct: true },
            { text: 'Soy casado y tengo dos hijo', correct: false },
            { text: 'Estoy casado y estoy padre de dos hijos', correct: false },
        ]
    },
    {
        tion: 'Como se llama tu mujer?',
        answers: [
            { text: 'Se llama Sharrrr', correct: true },
            { text: 'Tu mujer se llama Sharrrr', correct: false },
            { text: 'Se llama Kelly', correct: false },
            { text: 'Se llama Conor', correct: false },
        ]
    },
    {
        tion: 'Cuanto tiempo llevas aprendiendo español?',
        answers: [
            { text: 'Llevo un par de años aprendiendo español', correct: true },
            { text: 'LLeva mucho tiempo', correct: false },
            { text: 'Llevas muchos años', correct: false },
            { text: 'Llevo tiempo aprendiendo ingles', correct: false },
        ]
    },
    {
        tion: 'What is the past tense of "eat"?',
        answers: [
            { text: 'Ate', correct: true },
            { text: 'Eating', correct: false },
            { text: 'Eaten', correct: false },
            { text: 'Eats', correct: false },
        ]
    },
    {
        tion: 'Which word is an adjective?',
        answers: [
            { text: 'Sun', correct: false },
            { text: 'Hot', correct: true },
            { text: 'Run', correct: false },
            { text: 'Happy', correct: false },
        ]
    }
];

const intermediatetions = [
    {
        tion: "What is the past participle of the verb 'swim'?",
        answers: [
            { text: "Swimmed", correct: false },
            { text: "Swam", correct: true },
            { text: "Swum", correct: false },
            { text: "Swimming", correct: false }
        ]
    },
    {
        tion: "Choose the correct form of the verb: 'She ____ a book every day.'",
        answers: [
            { text: "Reads", correct: true },
            { text: "Reading", correct: false },
            { text: "Read", correct: false },
            { text: "To read", correct: false }
        ]
    },
    {
        tion: "What is the opposite of 'expand'?",
        answers: [
            { text: "Shrink", correct: true },
            { text: "Grow", correct: false },
            { text: "Increase", correct: false },
            { text: "Extend", correct: false }
        ]
    },
    {
        tion: "Choose the correct preposition: 'I'm going ____ vacation next week.'",
        answers: [
            { text: "On", correct: true },
            { text: "At", correct: false },
            { text: "In", correct: false },
            { text: "With", correct: false }
        ]
    },
    {
        tion: 'Which word is an adverb?',
        answers: [
            { text: 'Quickly', correct: true },
            { text: 'House', correct: false },
            { text: 'Jumped', correct: false },
            { text: 'Beautiful', correct: false },
        ]
    },
    {
        tion: 'Choose the correct synonym for "happy".',
        answers: [
            { text: 'Sad', correct: false },
            { text: 'Joyful', correct: true },
            { text: 'Angry', correct: false },
            { text: 'Tired', correct: false },
        ]
    },
    {
        tion: 'Which of the following is an example of an indefinite pronoun?',
        answers: [
            { text: 'He', correct: false },
            { text: 'They', correct: false },
            { text: 'Everyone', correct: true },
            { text: 'My', correct: false },
        ]
    },
    {
        tion: 'What is the correct past participle of the verb "swim"?',
        answers: [
            { text: 'Swam', correct: false },
            { text: 'Swum', correct: true },
            { text: 'Swimmed', correct: false },
            { text: 'Swimming', correct: false },
        ]
    },
    {
        tion: 'Identify the correct spelling.',
        answers: [
            { text: 'Recieve', correct: false },
            { text: 'Receive', correct: true },
            { text: 'Recievee', correct: false },
            { text: 'Receave', correct: false },
        ]
    },
    {
        tion: 'Which of the following is a subordinating conjunction?',
        answers: [
            { text: 'And', correct: false },
            { text: 'But', correct: false },
            { text: 'Although', correct: true },
            { text: 'Or', correct: false },
        ]
    }

];

const advancedtions = [
    {
        tion: "Which of the following is an example of an idiom? 'Break a leg', 'Runny nose', 'Piece of cake', 'High five'",
        answers: [
            { text: "Runny nose", correct: false },
            { text: "Piece of cake", correct: true },
            { text: "High five", correct: false },
            { text: "Break a leg", correct: false }
        ]
    },
    {
        tion: "What does the phrasal verb 'get over' mean?",
        answers: [
            { text: "To recover from something", correct: true },
            { text: "To receive something", correct: false },
            { text: "To understand something", correct: false },
            { text: "To give up on something", correct: false }
        ]
    },
    {
        tion: "Choose the correct word to complete the sentence: 'She has a great ____ of humor.'",
        answers: [
            { text: "Sense", correct: true },
            { text: "Feeling", correct: false },
            { text: "Taste", correct: false },
            { text: "Touch", correct: false }
        ]
    },
    {
        tion: "What is the plural form of 'datum'?",
        answers: [
            { text: "Data", correct: true },
            { text: "Datas", correct: false },
            { text: "Datums", correct: false },
            { text: "Datae", correct: false }
        ]
    },
    {
        tion: 'What is the correct plural form of "ox"?',
        answers: [
            { text: 'Oxen', correct: true },
            { text: 'Oxes', correct: false },
            { text: 'Oxies', correct: false },
            { text: 'Oxs', correct: false },
        ]
    },
    {
        tion: 'Which word is a synonym for "generous"?',
        answers: [
            { text: 'Stingy', correct: false },
            { text: 'Kind', correct: true },
            { text: 'Rude', correct: false },
            { text: 'Lazy', correct: false },
        ]
    },
    {
        tion: 'What is the superlative form of "good"?',
        answers: [
            { text: 'Better', correct: false },
            { text: 'Best', correct: true },
            { text: 'Gooder', correct: false },
            { text: 'Goodest', correct: false },
        ]
    },
    {
        tion: 'Which word is an adverb?',
        answers: [
            { text: 'Quickly', correct: true },
            { text: 'House', correct: false },
            { text: 'Jumped', correct: false },
            { text: 'Beautiful', correct: false },
        ]
    },
    {
        tion: 'Choose the correct synonym for "happy".',
        answers: [
            { text: 'Sad', correct: false },
            { text: 'Joyful', correct: true },
            { text: 'Angry', correct: false },
            { text: 'Tired', correct: false },
        ]
    },
    {
        tion: 'What is the opposite of "strong"?',
        answers: [
            { text: 'Weak', correct: true },
            { text: 'Powerful', correct: false },
            { text: 'Brave', correct: false },
            { text: 'Fast', correct: false },
        ]
    }
];

let difficulty;

function handleButtonClick(event) {
    const selectedButton = event.target;
    const selectedButtonId = selectedButton.id;
    let currentQA;
    if (selectedButtonId === 'beginner-btn') {
        difficulty = "beginner";
        currentQA = beginnertions[currenttionIndex];
        leveltions = beginnertions;
    } else if (selectedButtonId === 'intermediate-btn') {
        difficulty = "intermediate";
        currentQA = intermediatetions[currenttionIndex];
        leveltions = intermediatetions;
    } else if (selectedButtonId === 'advanced-btn') {
        difficulty = "advanced";
        leveltions = advancedtions;
    }
    chooseLevelScreen.style.display = "none";
    tionContainer.style.display = "block";
    startLevel();
}

difficultyBeginnerBtn.addEventListener('click', handleButtonClick);
difficultyIntermediateBtn.addEventListener('click', handleButtonClick);
difficultyAdvancedBtn.addEventListener('click', handleButtonClick);

let leveltions, currenttionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currenttionIndex++;
    if (leveltions.length <= currenttionIndex) {
        nextButton.style.display = "none";
        startButton.style.display = "none";
        tionElement.style.display = "none";
        answerButtonsElement.style.display = "none";
        scoreMessage.classList.remove('hide');
        scoreMessage.style.display = "block";
        document.getElementById('final-score').innerText = correctCounter;
        document.getElementById('score-area').style.display = 'none';
        document.getElementById('tion-box').style.display = 'none';
        return;
    }
    stopTimer();
    setNexttion();
});

function startLevel() {
    currenttionIndex = 0;
    correctCounter = 0;
    wrongCounter = 0;
    tionContainerElement.classList.remove('hide');
    setNexttion();
}

//Timer
function stopTimer() {
    clearInterval(countdown);
}

function displayTimer() {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count === 0) {
            stopTimer();
            startGame();
        }
    }, 1000);
}

function startGame() {
    startButton.classList.add('hide');
    currenttionIndex = 0;
    correctCounter = 0;
    wrongCounter = 0;
    tionContainerElement.classList.remove('hide');
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    document.getElementById('score').innerText = 0;
    document.getElementById('incorrect').innerText = 0;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    setNexttion();
}

function setNexttion() {
    resetState();
    showtion(leveltions[currenttionIndex]);
    nextButton.disabled = true;
}

function showtion(tion) {
    tionElement.innerText = tion.tion;
    tion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        button.addEventListener('click', stopTimer);
        answerButtonsElement.appendChild(button);
    });
    const options = tionElement.querySelectorAll('.btn');
    options.forEach(option => {
        option.disabled = true;
    });
    displayTimer();
}


function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    count = 10;
}

let correctCounter, wrongCounter;
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        correctCounter++;
        document.getElementById('score').innerText = correctCounter;
    }
    else {
        wrongCounter++;
        document.getElementById('incorrect').innerText = wrongCounter;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.disabled = false;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}