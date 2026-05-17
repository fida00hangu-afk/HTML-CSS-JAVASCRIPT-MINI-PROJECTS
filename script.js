
let startScreen = document.querySelector('.start-screen')
let quizScreen = document.querySelector('.quiz-screen')
let resultScreen = document.querySelector('.result-screen')
let startBtn = document.getElementById('start-btn')
let resTartBtn = document.getElementById('reset-btn')
let score = document.getElementById('score')
let totalScore = document.getElementById('total-score')
let currentQ = document.querySelector('#current-q')
let nextBtn = document.querySelector('#next-btn')
let yourScore = document.getElementById('score')
let optionBox = document.querySelector('.option-box')
let passed = document.getElementById('passed');


const quizes = [
    {
        question: "What is out put in python",
        options: ["console.log", "print", "system.consle.log"],
        correct: "print"
    },
    {
        question: "Where is python run time",
        options: ["node js", "python installer", "terminal"],
        correct: "terminal"
    },
    {
        question: "is typescript globaly installation ?",
        options: ["yes globaly installation typescrpit", "no install globally", "i dont know"],
        correct: "yes globaly installation typescrpit"
    }
]

let index = 0
let correct = 0
let incorrect = 0
let selected = false
let Score
function showQuiz() {
    startScreen.classList.add('screen');
    quizScreen.classList.remove('screen')
    let q = quizes[index]

    optionBox.innerHTML = "";
    currentQ.innerText = q.question
    q.options.forEach(option => {
        selected = false
        let li = document.createElement('li')
        li.innerText = option
        optionBox.append(li)
        li.addEventListener('click', function () {
            if (selected) return
            selected = true
            if (option === q.correct) {
                correct++;
                Score++;
                li.style.background = "lightgreen"
            } else {
                incorrect++;
                Score++;
                li.style.background = "tomato"
            }
        })

        score.innerText = q.options.length
    });
}

function start() {
    startScreen.style.display = "none"
    quizScreen.style.display = "block"
    resultScreen.style.display = "none"
    showQuiz()
}
function next() {
    console.log("next called")
    index++;
    if (index < quizes.length) {
        showQuiz()
    } else {
        showResult()
    }
}


function showResult() {
    startScreen.style.display = "none"
    quizScreen.style.display = "none"
    resultScreen.style.display = "block"

    if (correct > incorrect) {
        passed.innerText = "passed"
    } else {
        passed.innerText = "failed"
    }
    if (correct > incorrect) {
        passed.innerText = "passed"
    } else {
        passed.innerText = "failed"
    }
    totalScore.innerText = index
    document.getElementById('score-y').innerText = correct
}


//next btn pr 
