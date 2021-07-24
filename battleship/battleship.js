console.log("babah");
var position;
var location1, location2, location3;
var guess;
var guesses = hits = 0;
var isSunk = false;

location1 = Math.floor(Math.random() * (5));
location2 = location1 + 1;
location3 = location2 + 1;

console.log(location1, location2, location3);

while (isSunk==false){
	guess = prompt("Enter your target (0..6):");
	if (guess < 0 || guess > 6){
		alert("Enter correct position (0..6).");
	}
	else{
		guesses += 1;
	}

	if (guess == location1 || guess == location2 || guess ==location3){

		hits += 1;
		if (hits == 3){
			isSunk = true;
			alert("You sank my battleship!")
		}
		alert("HIT!");
	}
	else{
		alert("MISS");
	}
	
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);
