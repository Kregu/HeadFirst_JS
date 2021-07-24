var position;
var location1, location2, location3;
var guess;
var guesses = hits = 0;
var isSunk = false;
var randomLock

randomLock =Math.floor(Math.random() * (5));

location1 = randomLock;
location2 = location1 + 1;
location3 = location2 + 1;

var map = [false, false, false, false, false, false, false]

map[location1] = true
map[location2] = true
map[location3] = true

console.log(location1, location2, location3);
console.log(map);

while (isSunk==false){
	guess = prompt("Enter your target (0..6):");
	if (guess < 0 || guess > 6){
		alert("Enter correct position (0..6).");
	}
	else{
		guesses += 1;
	}

	if (map[guess]){

		map[guess] = false
		hits += 1;
		alert("HIT!");

		if (hits == 3){
			isSunk = true;
			alert("You sank my battleship!")
		}

	}
	else{
		alert("MISS");
	}
	
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);
