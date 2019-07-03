// SCORE KEEPER GAME
var p1btn = document.querySelector("#p1")
var p2btn = document.getElementById("p2")
var span1 = document.querySelector("#span1")
var head = document.querySelector(".header")
var header = document.querySelector("h2")
var span2 = document.querySelector("#span2")
var reset = document.querySelector("#reset")
var lis = document.querySelectorAll("li")
var newLimit = document.querySelector("input")
var winningScoreDisplay  = document.getElementById("limit")

var p1Score = 0; 
var p2Score = 0; 
var gameOver = false;
var winningScore = 5;
p1btn.addEventListener("click", function() {
	if (!gameOver) {
		p1Score ++
		if (p1Score === winningScore) {
			gameOver = true
			span1.classList.add("winner")
			document.body.classList.add("body")
			header.textContent = "Player 1 is the WINNER!!!! WINNER!!!! "
			header.style.color = "chocolate"
			header.style.fontWeight = "bold"

		}
		span1.textContent = p1Score;
		
	}
})
p2btn.addEventListener("click", function() {
	if (!gameOver) {
		p2Score ++
		if (p2Score === winningScore) {
			gameOver = true
			span2.classList.add("winner")
			document.body.classList.add("body")
			header.style.color = "chocolate"
			header.textContent = "Player 2 is the WINNER!!!! WINNER!!!! "
			header.style.fontWeight = "bold"
		}
		span2.textContent = p2Score;
		
	}
})

// RESET
reset.addEventListener("click", function() {
	resets()
})

function resets() {
	p1Score = 0
	p2Score = 0
	span1.textContent = p1Score;
	span2.textContent = p2Score;
	span1.classList.remove("winner")
	span2.classList.remove("winner")
	document.body.classList.remove("body")
	header.style.color = "lightblue"
	header.textContent = "Section 1"
	gameOver = false
}
// CHANGE GAME LIMIT (NB: TO COLLECT INPUT DATA IN JS, WE USE THE .VALUE KEYWORDS)
newLimit.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value
	winningScore = Number(this.value)
	reset();
})
