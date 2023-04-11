let highScores = JSON.parse(localStorage.getItem("highscores")) || []




// function renderMessege() {
//     let lastScore = JSON.parse(localStorage.getItem("nameScore"));
//     if (lastScore !== null) {
document.getElementById("nameScore").innerHTML = localStorage.getItem("highscores");
//     }
// }
console.log(highScores)
// renderMessege();