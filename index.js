let introDiv = document.querySelector("#intro")
let introTitle = document.querySelector("#title")
let introDescription = document.querySelector("#description")
let startButton = document.querySelector("#start")
let quizDiv = document.querySelector("#quiz")
let questionMain = document.querySelector("#question")
let questionButton1 = document.querySelector("#answer1")
let questionButton2 = document.querySelector("#answer2")
let questionButton3 = document.querySelector("#answer3")
let questionButton4 = document.querySelector("#answer4")
let choiceDiv = document.querySelector("#choices")
let timeEl = document.querySelector(".time")
let endDiv = document.querySelector("#End")
let endTitle = document.querySelector("#endTitle")
let finalScore = document.querySelector("#finalScore")
let settingName = document.querySelector("#settingName")
let submitButton = document.querySelector("#submit")
let putName = document.querySelector("#putName")
let timer = 90
let highScores = JSON.parse(localStorage.getItem("highscores")) || []


function setTime() {
    let timerId = setInterval(function () {

        timer -= 1
        timeEl.textContent = "Time: " + timer;

        if (timer <= 0 || currentQuestion === questions.length) {
            clearInterval(timerId);
            quizDiv.setAttribute("class", "hideClass");
            endDiv.classList.remove("hideclass")
            renderEnd()
        }

    }, 1000);
}

let questions = [{ question: "What is the name of the main character in The Legend of Zelda series?", answers: ["Zelda", "Link", "Navi", "Ganondorf"], correctAnswer: "Link" },
{ question: "What is the name of the princess in the Mario series that Mario often rescues?", answers: ["Daisy", "Zelda", "Rosalina", "Peach"], correctAnswer: "Peach" },
{ question: "In the Mario series, what is the name of the character who is Mario`s brother?", answers: ["Yoshi", "Bowser", "Toad", "Luigi"], correctAnswer: "Luigi" },
{ question: "What is the name of the character who guides Link in The Legend of Zelda series?", answers: ["Navi", "Sheik", "Impa", "Saria"], correctAnswer: "Navi" },
{ question: "Who is the main antagonist in the Legend of Zelda series?", answers: ["Bowser", "Ganondorf", "Skull kid", "Darunia"], correctAnswer: "Ganondorf" },
{ question: "What is the name of the fictional land in which The Legend of Zelda is set?", answers: ["Dreamland", "Green Hill", "Hyrule", "Dallas"], correctAnswer: "Hyrule" },
{ question: "What is the name of the villainous character who serves as the main antagonist in the Super Mario Bros. games?", answers: ["Bowser", "Donkey kong", "Boo", "Goomba"], correctAnswer: "Bowser" }
]

let questionChoices = questions.answers;
let questionAnswer = questions.correctAnswer;
let currentQuestion = 0


function checkAnswer() {
    console.log(this.dataset.value)
    if (this.dataset.value === questions[currentQuestion].correctAnswer) {
        currentQuestion++
        renderQuestion();
    } else {
        timer -= 10
    }
}

function renderEnd() {
    quizDiv.setAttribute('class', 'hideClass')
    endDiv.classList.remove("hideClass")
    finalScore.textContent = "Your final score is " + timer
    clearInterval(timerId);
}

function renderQuestion() {
    questionMain.textContent = questions[currentQuestion].question;
    choiceDiv.textContent = ""
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        let button = document.createElement("button")
        button.textContent = questions[currentQuestion].answers[i]
        button.setAttribute("data-value", questions[currentQuestion].answers[i])
        button.addEventListener("click", checkAnswer)
        choiceDiv.appendChild(button)
        // if (currentQuestion === questions.length - 1) {
        //     renderEnd()
        // }
    }
}



startButton.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        introDiv.setAttribute("class", "hideClass")
        quizDiv.classList.remove("hideClass")
        renderQuestion();
        setTime()
    }

})


function gotoHighscore() {
    window.location.href = "highscores.html";
}


submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let userScore = {
        initals: putName.value,
        timer: timer,
    }
    highScores.push(userScore)
    localStorage.setItem("highscores", JSON.stringify(highScores));
});

