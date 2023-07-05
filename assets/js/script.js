/* jshint esversion: 6 */
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const chooseLevelScreen = document.getElementById('choose-level-screen');
const difficultyBeginnerBtn = document.getElementById('beginner-btn');
const difficultyIntermediateBtn = document.getElementById('intermediate-btn');
const difficultyAdvancedBtn = document.getElementById('advanced-btn');
const questionContainer = document.getElementById('question-box');
const questionContainerElement = document.getElementById('question-container');
const scoreMessage = document.getElementById('score-message');
let timeLeft = document.querySelector(".time-left");
let count = 10;
let countdown;
// Function to handle user log button click
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

const beginnerQuestions = [
    {
        question: "Which word is a noun?",
        answers: [
            { text: "Run", correct: false },
            { text: "Jump", correct: false },
            { text: "Apple", correct: true },
            { text: "Quickly", correct: false }
        ]
    },
    {
        question: "What is the plural form of 'child'?",
        answers: [
            { text: "Childs", correct: false },
            { text: "Children", correct: true },
            { text: "Childes", correct: false },
            { text: "Childen", correct: false }
        ]
    },
    {
        question: "Which sentence is grammatically correct?",
        answers: [
            { text: "I goed to the store yesterday.", correct: false },
            { text: "She sings good.", correct: false },
            { text: "They have been swimming in the lake.", correct: true },
            { text: "He play soccer every day.", correct: false }
        ]
    },
    {
        question: "Choose the synonym for 'happy'.",
        answers: [
            { text: "Sad", correct: false },
            { text: "Joyful", correct: true },
            { text: "Angry", correct: false },
            { text: "Tired", correct: false }
        ]
    },
    {
        question: 'What is the opposite of "hot"?',
        answers: [
            { text: 'Cold', correct: true },
            { text: 'Big', correct: false },
            { text: 'Happy', correct: false },
            { text: 'Fast', correct: false },
        ]
    },
    {
        question: 'Which word is a verb?',
        answers: [
            { text: 'Chair', correct: false },
            { text: 'Run', correct: true },
            { text: 'Blue', correct: false },
            { text: 'Table', correct: false },
        ]
    },
    {
        question: 'What is the plural form of "cat"?',
        answers: [
            { text: 'Cats', correct: true },
            { text: 'Dog', correct: false },
            { text: 'Sheep', correct: false },
            { text: 'Mouse', correct: false },
        ]
    },
    {
        question: 'Which word means the opposite of "old"?',
        answers: [
            { text: 'New', correct: true },
            { text: 'Tall', correct: false },
            { text: 'Small', correct: false },
            { text: 'Happy', correct: false },
        ]
    },
    {
        question: 'What is the past tense of "eat"?',
        answers: [
            { text: 'Ate', correct: true },
            { text: 'Eating', correct: false },
            { text: 'Eaten', correct: false },
            { text: 'Eats', correct: false },
        ]
    },
    {
        question: 'Which word is an adjective?',
        answers: [
            { text: 'Sun', correct: false },
            { text: 'Hot', correct: true },
            { text: 'Run', correct: false },
            { text: 'Happy', correct: false },
        ]
    }
];

const intermediateQuestions = [
    {
        question: "What is the past participle of the verb 'swim'?",
        answers: [
            { text: "Swimmed", correct: false },
            { text: "Swam", correct: true },
            { text: "Swum", correct: false },
            { text: "Swimming", correct: false }
        ]
    },
    {
        question: "Choose the correct form of the verb: 'She ____ a book every day.'",
        answers: [
            { text: "Reads", correct: true },
            { text: "Reading", correct: false },
            { text: "Read", correct: false },
            { text: "To read", correct: false }
        ]
    },
    {
        question: "What is the opposite of 'expand'?",
        answers: [
            { text: "Shrink", correct: true },
            { text: "Grow", correct: false },
            { text: "Increase", correct: false },
            { text: "Extend", correct: false }
        ]
    },
    {
        question: "Choose the correct preposition: 'I'm going ____ vacation next week.'",
        answers: [
            { text: "On", correct: true },
            { text: "At", correct: false },
            { text: "In", correct: false },
            { text: "With", correct: false }
        ]
    },
    {
        question: 'Which word is an adverb?',
        answers: [
            { text: 'Quickly', correct: true },
            { text: 'House', correct: false },
            { text: 'Jumped', correct: false },
            { text: 'Beautiful', correct: false },
        ]
    },
    {
        question: 'Choose the correct synonym for "happy".',
        answers: [
            { text: 'Sad', correct: false },
            { text: 'Joyful', correct: true },
            { text: 'Angry', correct: false },
            { text: 'Tired', correct: false },
        ]
    },
    {
        question: 'Which of the following is an example of an indefinite pronoun?',
        answers: [
            { text: 'He', correct: false },
            { text: 'They', correct: false },
            { text: 'Everyone', correct: true },
            { text: 'My', correct: false },
        ]
    },
    {
        question: 'What is the correct past participle of the verb "swim"?',
        answers: [
            { text: 'Swam', correct: false },
            { text: 'Swum', correct: true },
            { text: 'Swimmed', correct: false },
            { text: 'Swimming', correct: false },
        ]
    },
    {
        question: 'Identify the correct spelling.',
        answers: [
            { text: 'Recieve', correct: false },
            { text: 'Receive', correct: true },
            { text: 'Recievee', correct: false },
            { text: 'Receave', correct: false },
        ]
    },
    {
        question: 'Which of the following is a subordinating conjunction?',
        answers: [
            { text: 'And', correct: false },
            { text: 'But', correct: false },
            { text: 'Although', correct: true },
            { text: 'Or', correct: false },
        ]
    }

];

const advancedQuestions = [
    {
        question: "Which of the following is an example of an idiom? 'Break a leg', 'Runny nose', 'Piece of cake', 'High five'",
        answers: [
            { text: "Runny nose", correct: false },
            { text: "Piece of cake", correct: true },
            { text: "High five", correct: false },
            { text: "Break a leg", correct: false }
        ]
    },
    {
        question: "What does the phrasal verb 'get over' mean?",
        answers: [
            { text: "To recover from something", correct: true },
            { text: "To receive something", correct: false },
            { text: "To understand something", correct: false },
            { text: "To give up on something", correct: false }
        ]
    },
    {
        question: "Choose the correct word to complete the sentence: 'She has a great ____ of humor.'",
        answers: [
            { text: "Sense", correct: true },
            { text: "Feeling", correct: false },
            { text: "Taste", correct: false },
            { text: "Touch", correct: false }
        ]
    },
    {
        question: "What is the plural form of 'datum'?",
        answers: [
            { text: "Data", correct: true },
            { text: "Datas", correct: false },
            { text: "Datums", correct: false },
            { text: "Datae", correct: false }
        ]
    },
    {
        question: 'What is the correct plural form of "ox"?',
        answers: [
            { text: 'Oxen', correct: true },
            { text: 'Oxes', correct: false },
            { text: 'Oxies', correct: false },
            { text: 'Oxs', correct: false },
        ]
    },
    {
        question: 'Which word is a synonym for "generous"?',
        answers: [
            { text: 'Stingy', correct: false },
            { text: 'Kind', correct: true },
            { text: 'Rude', correct: false },
            { text: 'Lazy', correct: false },
        ]
    },
    {
        question: 'What is the superlative form of "good"?',
        answers: [
            { text: 'Better', correct: false },
            { text: 'Best', correct: true },
            { text: 'Gooder', correct: false },
            { text: 'Goodest', correct: false },
        ]
    },
    {
        question: 'Which word is an adverb?',
        answers: [
            { text: 'Quickly', correct: true },
            { text: 'House', correct: false },
            { text: 'Jumped', correct: false },
            { text: 'Beautiful', correct: false },
        ]
    },
    {
        question: 'Choose the correct synonym for "happy".',
        answers: [
            { text: 'Sad', correct: false },
            { text: 'Joyful', correct: true },
            { text: 'Angry', correct: false },
            { text: 'Tired', correct: false },
        ]
    },
    {
        question: 'What is the opposite of "strong"?',
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
        currentQA = beginnerQuestions[currentQuestionIndex];
        levelQuestions = beginnerQuestions;
    } else if (selectedButtonId === 'intermediate-btn') {
        difficulty = "intermediate";
        currentQA = intermediateQuestions[currentQuestionIndex];
        levelQuestions = intermediateQuestions;
    } else if (selectedButtonId === 'advanced-btn') {
        difficulty = "advanced";
        levelQuestions = advancedQuestions;
    }
    chooseLevelScreen.style.display = "none";
    questionContainer.style.display = "block";
    startLevel();
}

difficultyBeginnerBtn.addEventListener('click', handleButtonClick);
difficultyIntermediateBtn.addEventListener('click', handleButtonClick);
difficultyAdvancedBtn.addEventListener('click', handleButtonClick);

let levelQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (levelQuestions.length <= currentQuestionIndex) {
        nextButton.style.display = "none";
        startButton.style.display = "none";
        questionElement.style.display = "none";
        answerButtonsElement.style.display = "none";
        scoreMessage.classList.remove('hide');
        scoreMessage.style.display = "block";
        document.getElementById('final-score').innerText = correctCounter;
        document.getElementById('score-area').style.display = 'none';
        document.getElementById('question-box').style.display = 'none';
        return;
    }
    stopTimer();
    setNextQuestion();
});

function startLevel() {
    currentQuestionIndex = 0;
    correctCounter = 0;
    wrongCounter = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
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
    currentQuestionIndex = 0;
    correctCounter = 0;
    wrongCounter = 0;
    questionContainerElement.classList.remove('hide');
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    document.getElementById('score').innerText = 0;
    document.getElementById('incorrect').innerText = 0;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(levelQuestions[currentQuestionIndex]);
    nextButton.disabled = true;
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
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
    const options = questionElement.querySelectorAll('.btn');
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