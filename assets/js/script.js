const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const userInputElement = document.getElementById('user');
const userLogButton = document.getElementById('user-log');
const chooseLevelScreen = document.getElementById('choose-level-screen');
const levelButtons = document.querySelectorAll('button.button-level');
const difficultyBeginnerBtn = document.getElementById('beginner-btn');
const difficultyIntermediateBtn = document.getElementById('intermediate-btn');
const difficultyAdvancedBtn = document.getElementById('advanced-btn');
const questionContainer = document.getElementById('question-box');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions = 0;
let currentQuestionIndex = 0;


// Function to handle user log button click
document.getElementById("user-log").addEventListener("click", checkUsername);

function checkUsername() {
    let username = document.getElementById("user").value.trim();
    let errorMessage = document.getElementById("error-message");
    if (username.length >= 1 && username.length <= 12) {
        chooseLevelScreen.style.display = "block";
        mainLoginScreen.style.display = "none";
        document.getElementById("user").innerText = 'user';
    } else {
        errorMessage.style.display = "block";
        document.getElementById("user").focus();
        document.getElementById("user").value = "";
    }
}

checkUsername();

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
    }
];

// Function to handle level button click
function handleLevelButtonClick(e) {
    const levelButtonsContainer = document.getElementById('level-buttons');
    const selectedLevel = levelButtonsContainer.getElementsByClassName('button-level');
};
// Add event listener to user log button
userLogButton.addEventListener('click', handleLevelButtonClick);
// Add event listener to level buttons
levelButtons.forEach(button => {
    button.addEventListener('click', handleLevelButtonClick);
    console.log('This works');
});
handleLevelButtonClick();

function handleButtonClick(event) {
    const selectedButton = event.target;
    const selectedButtonId = selectedButton.id;
    console.log("Button selected:", selectedButtonId);

    if (selectedButtonId === 'beginner-btn') {
        // Display beginner level questions
        chooseLevelScreen.style.display = "none";
        questionContainer.style.display = "block";
        console.log('Displaying beginner questions');
    } else if (selectedButtonId === 'intermediate-btn') {
        // Display intermediate level questions
        chooseLevelScreen.style.display = "none";
        questionContainer.style.display = "block";
        console.log('Displaying intermediate questions');
    } else if (selectedButtonId === 'advanced-btn') {
        // Display advanced level questions
        chooseLevelScreen.style.display = "none";
        questionContainer.style.display = "block";
        console.log('Displaying advanced questions');
    }
}

difficultyBeginnerBtn.addEventListener('click', handleButtonClick);
difficultyIntermediateBtn.addEventListener('click', handleButtonClick);
difficultyAdvancedBtn.addEventListener('click', handleButtonClick);

function showQuestions(level) {
    let selectedQuestions;

    if (level === 'beginner') {
        selectedQuestions = beginnerQuestions;
    } else if (level === 'intermediate') {
        selectedQuestions = intermediateQuestions;
    } else if (level === 'advanced') {
        selectedQuestions = advancedQuestions;
    }

    questionContainer.innerHTML = '';
    questionContainer.style.display = 'block';

    selectedQuestions.forEach((questionObj) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerText = questionObj.question;

        const answersElement = document.createElement('div');
        answersElement.classList.add('answers');

        questionObj.answers.forEach((answer) => {
            const answerButton = document.createElement('button');
            answerButton.innerText = answer.text;
            answerButton.classList.add('btn');
            answerButton.addEventListener('click', () => handleAnswer(answer.correct));

            answersElement.appendChild(answerButton);
        });

        questionElement.appendChild(answersElement);
        questionContainer.appendChild(questionElement);
    });
}

function handleBeginnerButtonClick() {
    chooseLevelScreen.style.display = 'none';
    showQuestions('beginner');
}

function handleIntermediateButtonClick() {
    chooseLevelScreen.style.display = 'none';
    showQuestions('intermediate');
}

function handleAdvancedButtonClick() {
    chooseLevelScreen.style.display = 'none';
    showQuestions('advanced');
}

const beginnerButton = document.getElementById('beginner-btn');
const intermediateButton = document.getElementById('intermediate-btn');
const advancedButton = document.getElementById('advanced-btn');

beginnerButton.addEventListener('click', handleBeginnerButtonClick);
intermediateButton.addEventListener('click', handleIntermediateButtonClick);
advancedButton.addEventListener('click', handleAdvancedButtonClick);


//Questions

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    chooseLevelScreen.style.display = "none";
    questionContainer.style.display = "block";
    shuffledQuestions = shuffleQuestions(selectedLevel);
    displayQuestion();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
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
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
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
