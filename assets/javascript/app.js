
var currentNumber = 0;
var randomNumber = 0;
var winCounter = 0;
var lossCounter = 0;



$(document).ready(function() {




$("#gem1").on("click", function() {
        
        currentNumber +=  Math.floor(Math.random()*11+1);
		document.getElementById("currentNumberSpot").innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem2").on("click", function() {
        
        currentNumber += Math.floor(Math.random()*11+1);
        document.getElementById("currentNumberSpot").innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem3").on("click", function() {
        
        currentNumber += Math.floor(Math.random()*11+1);
        document.getElementById("currentNumberSpot").innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem4").on("click", function() {
        
        currentNumber += Math.floor(Math.random()*11+1);
		document.getElementById("currentNumberSpot").innerHTML = currentNumber;
        checkWinCondition();

	
	});

randomNumber = Math.floor(Math.random()*101+19);
console.log(randomNumber);

document.getElementById("currentNumberSpot").innerHTML = currentNumber;
document.getElementById("targetNumber").innerHTML = randomNumber;
document.getElementById("lossCounter").innerHTML = "Losses: " +lossCounter;
document.getElementById("winCounter").innerHTML = "Wins: " + winCounter;


function checkWinCondition () {
	if (randomNumber == currentNumber) {

		alert("You Win!");
		winCounter++;
		document.getElementById('winCounter').innerHTML = "Wins: " + winCounter;
	}

	if (currentNumber > randomNumber) {
		alert("You Lost!");
		lossCounter++;
		document.getElementById('lossCounter').innerHTML = "Losses: " + lossCounter;
	}
}


  $("#resetButton").on("click", function() {
      	currentNumber = 0;
      	randomNumber = Math.floor(Math.random()*100+1);
     	document.getElementById('currentNumberSpot').innerHTML = currentNumber;
		document.getElementById('targetNumber').innerHTML = randomNumber;
		document.getElementById('lossCounter').innerHTML = "Losses: " + lossCounter;
		document.getElementById('winCounter2').innerHTML = "Wins: " + winCounter;
      
  });

        
        


});