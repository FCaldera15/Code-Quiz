let highScores = JSON.parse(localStorage.getItem("highscores")) || []




function renderMessege() {
    var lastScore = JSON.parse(localStorage.getItem("nameScore"));
    if (lastScore !== null) {
        document.querySelector("#nameScore").textContent = "not available"

    }
}