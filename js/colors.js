var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color");
var displayMsg = document.getElementById("message");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easybtn")
var hardBtn = document.querySelector("#hardbtn")

	// set required color
	colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i]

	// add addEventListener to each square
	squares[i].addEventListener("click", function() {
	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;
		// compare color to pickColor
		if (clickedColor === pickedColor) {
			displayMsg.textContent = "Correct!!"
			changeColors(clickedColor)
			h1.style.backgroundColor = clickedColor
			resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#000"
			displayMsg.textContent = "Try Again!"
		}
	})
}

// Easy button event Listener
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numSquares = 3
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i]
			squares[i].classList.add("circle")
		} else {
			squares[i].style.display = "none"
		}
	}
	 resetButton.textContent = "New Colors"
	 h1.style.background = "steelBlue"
	 displayMsg.textContent = ""
})

// Hard button event Listener
hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	numSquares = 6
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i]
		squares[i].style.display = "block"
		squares[i].classList.add("circle")
	}
	 resetButton.textContent = "New Colors"
	 h1.style.background = "steelBlue"
	 displayMsg.textContent = ""
})


// reset button function
resetButton.addEventListener("click",  function() {
	// generate new colors
	colors = generateRandomColors(numSquares)
	// pick a random color from array
	 pickedColor = pickColor();
	// change colorDisplay to match new colors
	 colorDisplay.textContent = pickedColor;
	 resetButton.textContent = "New Colors"
	// change h1 background color 
	 h1.style.background = "steelBlue"
	 displayMsg.textContent = ""

	// change colors of squares
	for (var i = 0; i < colors.length; i++) {
		if (colors[i]) {
		squares[i].style.display = "block"
		squares[i].style.backgroundColor = colors[i]
	} else {
		squares[i].style.display = "none"
	}
  }
})


// FUNCTIONS to keep work clean
function changeColors(color) {
	// loop trough all colors
	for (var i = 0; i < squares.length; i++) {
		// change all colors to pickedColor
		squares[i].style.backgroundColor = color
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
};

// generate Random colors in an array

function generateRandomColors(num) {
	// make an empty array
	var colorArr = [];								// NB: In js, we pick a RANDOM NUMBER using the Math.random() 
	// repeat num times								// We can use Math.floor() to convert the decimal values from Math.random() to whole numbers
	for (var i = 0; i < num; i++) {					// function which only picks a number bt 0 and 1 but does not include 1. 
		//get random colors and push into array
		colorArr.push(randomColor());
	}
	//return array
	return colorArr												
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")"
}