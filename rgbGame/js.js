let numSquares = 6;
let colors = generateRandomColors(numSquares);
let resetButton = document.querySelector("#reset")
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let modeButtons = document.querySelectorAll(".mode");
let streak = 0;
let failMessage = document.querySelector(".failed");

init();

function init(){
  //Mode buttons event listeners

  for(let i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
  for(let i = 0; i < squares.length; i++){
    //add click events
    squares[i].addEventListener('click', function(){
      //grab color of picked square
    let clickedColor = this.style.backgroundColor;
      //compare color to winning color
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      h1.style.backgroundColor = clickedColor;
      changeColors(clickedColor);
      resetButton.textContent = "Play again?";
    }else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
      streak++;
      failMessage.textContent="Failed Attempts: " + streak;
    }
    });
  }

  reset();
}

for(let i = 0; i< modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  });
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  //change squares color on screen
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none"
    }
    squares[i].style.background = colors[i];
  }
  h1.style.backgroundColor = "steelblue"
  messageDisplay.textContent = "";
  streak = 0;
  failMessage.textContent="Failed Attempts: " + streak;
}

resetButton.addEventListener("click", function(){
    reset();
})


colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++){
  //add click events
  squares[i].addEventListener('click', function(){
    //grab color of picked square
  let clickedColor = this.style.backgroundColor;
    //compare color to winning color
  if(clickedColor === pickedColor){
    messageDisplay.textContent = "Correct!";
    h1.style.backgroundColor = clickedColor;
    changeColors(clickedColor);
    resetButton.textContent = "Play again?";
  }else{
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again!";
  }
  });
}

function changeColors(color){
  //loop through all squares
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  //change each color to match given color
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
  //Make array
  let arr = [];
  //repeat num times
  for(let i = 0; i < num; i++){
    //get random color and puch into array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red from 0 - 255"
  let r = Math.floor(Math.random() * 256);
  //pick a "green from 0 - 255"
  let g = Math.floor(Math.random() * 256);
  //pick a "blue from 0 - 255"
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
