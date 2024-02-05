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
document.getElementById("user-log").addEventListener("click", checkUsername);

function checkUsername() {
    let username = document.getElementById("user").value.trim();
    let errorMessage = document.getElementById("error-message");
    let chooseDifficulty = document.getElementById("username");
    chooseDifficulty.innerText = `${username}, are you ready to learn Spanish?`;
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
        question: "Como te llamas?",
        answers: [
            { text: "Mi llamo es Ken", correct: false },
            { text: "Mi nombre son Ken", correct: false },
            { text: "Me llamo Ken", correct: true },
            { text: "Me llamas Ken", correct: false }
        ]
    },
    {
        question: "Donde vives?",
        answers: [
            { text: "Vives en Cork", correct: false },
            { text: "Vivo en Cork", correct: true },
            { text: "Vivas en Cork", correct: false },
            { text: "Viva en Cork", correct: false }
        ]
    },
    {
        question: "Cuantos años tienes?",
        answers: [
            { text: "Tengo 58", correct: false },
            { text: "Tienes 58 año", correct: false },
            { text: "Tengo 58 años", correct: true },
            { text: "Eu tengo 58 años", correct: false }
        ]
    },
    {
        question: "Como estas?.",
        answers: [
            { text: "Soy cansado", correct: false },
            { text: "Estoy bien", correct: true },
            { text: "Estas muy bien", correct: false },
            { text: "Estamos mal", correct: false }
        ]
    },
    {
        question: 'De donde eres?',
        answers: [
            { text: 'Soy de Irlanda', correct: true },
            { text: 'Eres de Irlanda', correct: false },
            { text: 'Estoy de Irlanda', correct: false },
            { text: 'Ero de Irlanda', correct: false },
        ]
    },
    {
        question: 'Estas casado? Tienes hijos?',
        answers: [
            { text: 'Chair', correct: false },
            { text: 'Estoy casado y tengo dos hijos', correct: true },
            { text: 'Soy casado y tengo dos hijo', correct: false },
            { text: 'Estoy casado y estoy padre de dos hijos', correct: false },
        ]
    },
    {
        question: 'Como se llama tu mujer?',
        answers: [
            { text: 'Se llama Sharrrr', correct: true },
            { text: 'Tu mujer se llama Sharrrr', correct: false },
            { text: 'Se llama Kelly', correct: false },
            { text: 'Se llama Conor', correct: false },
        ]
    },
    {
        question: 'Cuanto tiempo llevas aprendiendo español?',
        answers: [
            { text: 'Llevo un par de años aprendiendo español', correct: true },
            { text: 'LLeva mucho tiempo', correct: false },
            { text: 'Llevas muchos años', correct: false },
            { text: 'Llevo tiempo aprendiendo ingles', correct: false },
        ]
    },
    {
        question: 'Como se dice "I have high blood pressure and I feel dizzy"?',
        answers: [
            { text: 'Tengo presion alta y tengo mareos', correct: true },
            { text: 'Tengo presion y estoy mareos', correct: false },
            { text: 'Tengo presion baja y soy cansado', correct: false },
            { text: 'No me encuentro bien con la presion alta', correct: false },
        ]
    },
    {
        question: 'Como se dice "I take tablets for my high blood pressure 3 times a day"',
        answers: [
            { text: 'Toma tabletas para mi corazon 3 tiempos al dia', correct: false },
            { text: 'Tomo pastillas para mi alta presion tres veces al dia', correct: true },
            { text: 'Tomo tabletas para mi corazon 3 tiempos al dia', correct: false },
            { text: 'Tomo pastillas para my alta presion tres veces a la dia', correct: false },
        ]
    }
];

const intermediateQuestions = [
    {
        question: "Como se dice 'I fell and my knee is sore'?",
        answers: [
            { text: "Fui y me duele el tobillo", correct: false },
            { text: "Me caí y me duele la rodilla", correct: true },
            { text: "Fingí y me duele la cabeza", correct: false },
            { text: "Me caigo y me duele el corazon", correct: false }
        ]
    },
    {
        question: "Choose the correct English sentence: 'Me duele mucho la muela de juicio'",
        answers: [
            { text: "My wisdom tooth hurts a lot", correct: true },
            { text: "My upper tooth hurts a lot", correct: false },
            { text: "My tooth on my lower jaw hurts a lot", correct: false },
            { text: "My jawbone hurts a lot", correct: false }
        ]
    },
    {
        question: "Como se diría 'I do not feel well, my heart is beating really fast' (Bare in mind that all of these phrases are correct, so take them down, but only one is how you would say it in Spanish)?",
        answers: [
            { text: "No me encuentro bien, mi corazon está pitando muy rapdio", correct: true },
            { text: "No me siento bien,", correct: false },
            { text: "No estoy bien, estoy mareado", correct: false },
            { text: "No me encuentro bien, voy a vomitar", correct: false }
        ]
    },
    {
        question: "Como se dice: 'I have a house here and I am only here for a few days y I do not feel well' (Bare in mind that all of these phrases are correct, so take them down, but only one is how you would say it in Spanish)",
        answers: [
            { text: "Tengo una casa aquí pero estoy aquí para pasar un par de días, y no me encuentro bien", correct: true },
            { text: "Mi casa tiene una piscina y está muy guay pero mi hija no está así que estoy un poco triste", correct: false },
            { text: "Tengo una casa en Playa Flamenca y voy a pasar unos días aquí pero me siento fatal, me das algo para el dolor?", correct: false },
            { text: "Mi casa está situada en Playa Flamenca, está lejos y no puedo respirar bien", correct: false }
        ]
    },
    {
        question: 'Choose the right words for the following pieces of vocabulary: "Heart, stomach, head, pain, tablets, back, ankle, dizzy"',
        answers: [
            { text: 'el corazon, el ojo, el hombro, el dolor, las pastillas, la muñeca, el tobillo, tengo mareos ', correct: false },
            { text: 'el oído, el estómago, la cabeza, el pie, las pastillas, la oreja, el tobillo, tengo mareos', correct: false },
            { text: 'el corazon, el estómago, la cabeza, el dolor, las pastillas, la espalda, el tobillo, tengo mareos', correct: true },
            { text: 'el dedp, el estómago, la hígado, el dolor, las pastillas, la espalda, el tobillo, estoy mareos', correct: false },
        ]
    },
    {
        question: 'How do you say "I need to see a doctor, it is an emergency. I have my European health card". (Bare in mind all of these phrases you may need in the future padre)',
        answers: [
            { text: 'Necesito ver un médico, hay un problema con mi corazon. Tengo mi tarjeta sanitaria europea', correct: false },
            { text: 'Necesito ver un médico, es una emergencia. Tengo mi tarjeta sanitaria europea', correct: true },
            { text: 'Tengo que ver un docotr, hay una emergencia. Se me han acabdo mis pastillas y tengo la receta', correct: false },
            { text: 'Quiero ver un médico, es una emergencia. Tengo la receta de mi médico de Irlanda', correct: false },
        ]
    },
    {
        question: 'How do you say "3 hours ago I started to feel dizzy and I started breathing heavily" (bare in mind all phrases are grammtically correct, take note)?',
        answers: [
            { text: 'Hace 3 minutos me ha empezado a doler el pecho y ahora respiro muy hundo', correct: false },
            { text: 'Hace 3 días me mareé y me puse mal', correct: false },
            { text: 'Hace 3 horas he empezado a marearme y he empezado a respirar muy fuerte', correct: true },
            { text: 'Hace 3 horas me he mareado y ahora no me siento bien', correct: false },
        ]
    },
    {
        question: 'How do you say "Yesterday, after eating, I experienced stomach pain and nausea"?',
        answers: [
            { text: 'Ayer, después de comer, me duele la cabeza y me siento débil', correct: false },
            { text: 'Ayer, después de comer, tuve dolor de estómago y náuseas', correct: true },
            { text: 'Ayer, antes de comer, me sentí mal y me dolió la garganta', correct: false },
            { text: 'Ayer, después de cenar, me dio fiebre y me dolían las piernas', correct: false }
        ]
    },
    {
        question: 'How do you say "This morning, I woke up with a sore throat and a cough"?',
        answers: [
            { text: 'Esta mañana, me desperté con dolor de cabeza y congestión nasal', correct: false },
            { text: 'Esta mañana, me levanté con dolor de garganta y tos', correct: true },
            { text: 'Esta mañana, después de dormir, me sentí débil y mareado', correct: false },
            { text: 'Esta mañana, me dolieron los ojos y no pude respirar bien', correct: false }
        ]
    },
    {
        question: 'How do you say "Last week, I twisted my ankle while walking in the park"?',
        answers: [
            { text: 'La semana pasada, me caí y me rompí la pierna mientras caminaba en el parque', correct: false },
            { text: 'La semana pasada, me torcí el tobillo mientras caminaba en el parque', correct: true },
            { text: 'La semana pasada, me resbalé y me golpeé la cabeza en el parque', correct: false },
            { text: 'La semana pasada, me tropecé y me corté la mano en el parque', correct: false }
        ]
    }    

];

const advancedQuestions = [
    [
        {
            question: 'How do you say "I would like to order a pizza with pepperoni and mushrooms"?',
            answers: [
                { text: 'Disculpe, quisiera pedir una hamburguesa con papas fritas', correct: false },
                { text: 'Perdón, quiero una ensalada con pollo y aderezo', correct: false },
                { text: 'Quiero una pizza con pepperoni y champiñones', correct: true },
                { text: 'Disculpa, necesito un sándwich con jamón y queso', correct: false }
            ]
        },
        {
            question: 'How do you say "Can I have a coffee with milk, please"?',
            answers: [
                { text: '¿Puede darme una cerveza, por favor?', correct: false },
                { text: '¿Podría traerme un refresco de naranja, por favor?', correct: false },
                { text: '¿Me pones un café con leche, por favor?', correct: true },
                { text: '¿Me puede dar una botella de agua, por favor?', correct: false }
            ]
        },
        {
            question: 'How do you say "I need to buy eggs, milk, and bread at the supermarket"?',
            answers: [
                { text: 'Necesito comprar carne y pescado en la panadería', correct: false },
                { text: 'Quiero comprar frutas y verduras en la tienda de ropa', correct: false },
                { text: 'Tengo que comprar huevos, leche y pan en el supermercado', correct: true },
                { text: 'Me gustaría adquirir vino y queso en la farmacia', correct: false }
            ]
        },
        {
            question: 'How do you say "Where is the nearest pharmacy?"?',
            answers: [
                { text: '¿Dónde está la biblioteca más cercana?', correct: false },
                { text: '¿Puede indicarme dónde está el cine?', correct: false },
                { text: '¿Dónde está la farmacia más cercana?', correct: true },
                { text: '¿Me puede decir cómo llegar al parque?', correct: false }
            ]
        },
        {
            question: 'How do you say "I would like to go to the museum, how can I get there?"?',
            answers: [
                { text: 'Me gustaría ir al restaurante, ¿cómo llego?', correct: false },
                { text: 'Quiero visitar el zoológico, ¿dónde está?', correct: false },
                { text: 'Me gustaría ir al museo, ¿cómo puedo llegar?', correct: true },
                { text: 'Quisiera ir al cine, ¿dónde está?', correct: false }
            ]
        },
        {
            question: 'How do you say "I\'d like a menu, please" at a restaurant?',
            answers: [
                { text: 'Quisiera un periódico, por favor', correct: false },
                { text: 'Me gustaría una lista de precios, por favor', correct: false },
                { text: 'Me das el menú, por favor', correct: true },
                { text: 'Quiero una tarjeta de crédito, por favor', correct: false }
            ]
        },
        {
            question: 'How do you say "I need to buy a metro ticket to go downtown"?',
            answers: [
                { text: 'Necesito comprar un boleto de avión para ir al centro', correct: false },
                { text: 'Quiero un billete de tren para ir al centro comercial', correct: false },
                { text: 'Necesito comprar un billete de metro para ir al centro', correct: true },
                { text: 'Me gustaría un pase de autobús para ir al centro histórico', correct: false }
            ]
        },
        {
            question: 'How do you say "Excuse me, where is the nearest bus stop?"?',
            answers: [
                { text: 'Perdón, ¿dónde está la tienda de ropa más cercana?', correct: false },
                { text: 'Disculpe, ¿puede decirme dónde está el cine?', correct: false },
                { text: 'Perdón, ¿dónde está la parada de autobús más cercana?', correct: true },
                { text: 'Disculpe, ¿puede indicarme cómo llegar a la estación de tren?', correct: false }
            ]
        },
        {
            question: 'How do you say "I would like to buy a ticket for the 3 o\'clock train"?',
            answers: [
                { text: 'Quiero comprar un boleto para el autobús de las 3', correct: false },
                { text: 'Me gustaría comprar un ticket para el tren de las 3 en punto', correct: true },
                { text: 'Deseo adquirir una entrada para el avión de las 3', correct: false },
                { text: 'Necesito una entrada para el metro de las 3', correct: false }
            ]
        },
        {
            question: 'How do you say "What time does the supermarket close today?"?',
            answers: [
                { text: '¿A qué hora abre la tienda mañana?', correct: false },
                { text: '¿Cuándo cierra la farmacia hoy?', correct: false },
                { text: '¿A qué hora cierra el supermercado hoy?', correct: true },
                { text: '¿Cuándo abre la biblioteca hoy?', correct: false }
            ]
        }
    ]
    
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
    }, 1500);
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