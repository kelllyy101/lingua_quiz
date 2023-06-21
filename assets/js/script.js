const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
// Get the necessary elements
const loginScreen = document.getElementById('login-screen');
const userInputElement = document.getElementById('user');
const userLogButton = document.getElementById('user-log');
const chooseLevelScreen = document.getElementById('choose-level-screen');
const levelButtons = document.querySelectorAll('.button-level');

// Function to handle user log button click
function handleUserLogButtonClick() {
    const userName = userInputElement.value.trim();

    if (userName.length >= 12) {
        loginScreen.classList.add('hide');
        chooseLevelScreen.classList.remove('hide');

        // Update the user name in the choose level screen
        const userNameElements = document.querySelectorAll('.user-name');
        userNameElements.forEach(element => {
            element.textContent = userName;
        });
    } else {
        // Display error message if username is not at least 12 characters
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
}

// Function to handle level button click
function handleLevelButtonClick(e) {
    const selectedLevel = e.target.getAttribute('data-type');
    // Perform actions based on the selected level
    // This is where you can navigate to the questions page or perform any other logic
    // Log the selected level to the console
    console.log(`Selected Level: ${selectedLevel}`);
}

// Add event listener to user log button
userLogButton.addEventListener('click', handleUserLogButtonClick);

// Add event listener to level buttons
levelButtons.forEach(button => {
    button.addEventListener('click', handleLevelButtonClick);
});

let shuffledQuestions, currentQuestionIndex;

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


/*Footer*/
window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer');
    if (window.scrollY > 0) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
});
