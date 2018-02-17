
var currentNumber = 0;
var randomNumber = 0;
var winCounter = 0;
var lossCounter = 0;




var randomNumberGem1 = Math.floor(Math.random()*11+1);
console.log(randomNumberGem1);
var randomNumberGem2 = Math.floor(Math.random()*11+1);
console.log(randomNumberGem2);
var randomNumberGem3 = Math.floor(Math.random()*11+1);
console.log(randomNumberGem3);
var randomNumberGem4 = Math.floor(Math.random()*11+1);
console.log(randomNumberGem4);

function winrar() {
    alert("You won!");
}

function loser() {
    alert("Sorry, you lost.");
}

$(document).ready(function() {




$("#gem1").on("click", function() {
        
        currentNumber +=  randomNumberGem1;
		document.getElementById("currentNumberSpot").innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem2").on("click", function() {
        
        currentNumber += randomNumberGem2;
        document.getElementById("currentNumberSpot").innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem3").on("click", function() {
        
        currentNumber += randomNumberGem3;
        document.getElementById("currentNumberSpot").innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem4").on("click", function() {
        
        currentNumber += randomNumberGem4;
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

        setTimeout(winrar, 50);
		winCounter++;
		document.getElementById('winCounter').innerHTML = "Wins: " + winCounter;
	}

	if (currentNumber > randomNumber) {
		setTimeout(loser, 50);
		lossCounter++;
		document.getElementById('lossCounter').innerHTML = "Losses: " + lossCounter;
	}
}


  $("#resetButton").on("click", function() {
      	currentNumber = 0;
        randomNumber = Math.floor(Math.random()*101+19);
          
        console.log("--------------------------------");
        console.log(randomNumber);
     	document.getElementById('currentNumberSpot').innerHTML = currentNumber;
		document.getElementById('targetNumber').innerHTML = randomNumber;
	
        randomNumberGem1 = Math.floor(Math.random()*11+1);
        console.log(randomNumberGem1);
        randomNumberGem2 = Math.floor(Math.random()*11+1);
        console.log(randomNumberGem2);
        randomNumberGem3 = Math.floor(Math.random()*11+1);
        console.log(randomNumberGem3);
        randomNumberGem4 = Math.floor(Math.random()*11+1);
        console.log(randomNumberGem4);
      
  });


});