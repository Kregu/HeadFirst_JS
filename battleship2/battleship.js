var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		if (messageArea) {
			messageArea.innerHTML = msg
		}
	},
	displayHit: function(location) {
		var cell = document.getElementById(location);
		if (cell) {
			cell.setAttribute("class", "hit")
		}

	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		if (cell) {
			cell.setAttribute("class", "miss")
		}
	}
}


var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [{locations: ["10","20","30"],	hits: ["","",""]},
			{locations: ["32","33","34"],	hits: ["","",""]},
			{locations: ["63","64","65"],	hits: ["","",""]}],

	fire: function(guess) {
		for(var i=0; i < this.numShips; i++){
			var ship = this.ships[i];

			var index = ship.locations.indexOf(guess);
			if (index!= -1){
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!")
				if (this.isSunk(ship)) {
					this.shipsSunk++
					view.displayMessage("You sank my battleship!");
				}
				return true;
			}
		}
		view.displayMessage("MISS!");
		view.displayMiss(guess);
		return false;
	},
	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++){
			if (ship.hits[i] != "hit") {
				return false
			}
		}
		return true
	}

};		

var controller = {
	guesses: 0,

	processGuess: function (guess) {
		var location = this.parseGuess(guess);
		if (location) {
			this.guesses++
			var hit = model.fire(location)

			if (hit && model.shipsSunk == model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses.") ;
			}
		}
		
	},
	parseGuess: function (guess) {
		var alphabet = ["A","B","C","D","E","F","G"];

		if (guess == null || guess.length != 2){
			alert("Oops, please enter a letter and a number on the borard.");
		} 
		else {
			var firstChar = guess.charAt(0);
			var row = alphabet.indexOf(firstChar.toUpperCase());
		}
		var column = guess.charAt(1);

		
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if(row < 0 || row >= model.boardSize ||
					column < 0 || column >= model.boardSize) {
						alert("Oops, that's off the board.");
		} else { 
			return (row + column);
		}
		return(null)
	}
} 	
// controller.processGuess("d3")
// controller.processGuess("d2")
// controller.processGuess("d4")
// controller.processGuess("c0")
// controller.processGuess("d0")
// controller.processGuess("b0")
// controller.processGuess("g3")
// controller.processGuess("g4")
// controller.processGuess("g5")

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
}
function handleFireButton() {

}
