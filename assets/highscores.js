// Grabbing the high score timer and initials 
let highScores = JSON.parse(localStorage.getItem("highscores")) || []
// Creating New element 
let nameScore = document.getElementById("nameScore")
//Created a for loop to place the high scores 
for (let i = 0; i < highScores.length; i++) {

    const pTag = `<p>Initials: ${highScores[i].initals}, Score: ${highScores[i].timer}</p>`
    nameScore.insertAdjacentHTML("beforeend", pTag)

}

console.log(highScores)
