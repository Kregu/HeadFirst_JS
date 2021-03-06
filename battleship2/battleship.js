window.onload = init;

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
	
	ships: [{locations: ["0","0","0"],	hits: ["","",""]},
			{locations: ["0","0","0"],	hits: ["","",""]},
			{locations: ["0","0","0"],	hits: ["","",""]}],
	
	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) {
			//start position for horizontal align
			row = Math.floor(Math.random() * (this.boardSize));
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else {
			//start position for vertical  align
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * (this.boardSize));
		}

		var newShipLocation = [];

		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				// add to array for horizontal align
				newShipLocation.push(row + "" + (col + i));

			} else {
				//add tp array for vertical align
				newShipLocation.push((row + i) + "" + col)
			}			
		}
		return newShipLocation;
	},
	
	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];

			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.includes(locations[j])) {
					return true;
				}
			}
		}
		return false;
	},


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
			return
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

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();
}
function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = ""
}
function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

