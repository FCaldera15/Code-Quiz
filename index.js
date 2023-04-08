

let quizDiv = document.querySelector("#quiz")
let questionMain = document.querySelector("#question")
let questionButton1 = document.querySelector("#answer1")
let questionButton2 = document.querySelector("#answer2")
let questionButton3 = document.querySelector("#answer3")
let questionButton4 = document.querySelector("#answer4")

let timer = 90

let timerId = setInterval(function () {

    timer -= 1
    // console.log(timer);

}, 1000)





let questions = [{ question: "What is the name of the main character in The Legend of Zelda series?", answers: ["Zelda", "Link", "Navi", "Ganondorf"], correctAnswer: "Link" },
{ question: "What is the name of the princess in the Mario series that Mario often rescues?", answers: ["Daisy", "Zelda", "Rosalina", "Peach"], correctAnswer: "Peach" },
{ question: "In the Mario series, what is the name of the character who is Mario`s brother?", answers: ["Yoshi", "Bowser", "Toad", "Luigi"], correctAnswer: "Luigi" },
{ question: "What is the name of the character who guides Link in The Legend of Zelda series?", answers: ["Navi", "Sheik", "Impa", "Saria"], correctAnswer: "Navi" },
{ question: "Who is the main antagonist in the Legend of Zelda series?", answers: ["Bowser", "Ganondorf", "Skull kid", "Darunia"], correctAnswer: "Ganondorf" },
{ question: "What is the name of the fictional land in which The Legend of Zelda is set?", answers: ["Dreamland", "Green Hill", "Hyrule", "Dallas"], correctAnswer: "Hyrule" },
{ question: "What is the name of the villainous character who serves as the main antagonist in the Super Mario Bros. games?", answers: ["Bowser", "Donkey kong", "Boo", "Goomba"], correctAnswer: "Bowser" }
]

let currentQuestion = 0
renderQuestion();

function renderQuestion() {


    questionMain.textContent = questions[currentQuestion].question;
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3]

}


quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        console.log("clicked!")

        currentQuestion++
        renderQuestion();

    }



})