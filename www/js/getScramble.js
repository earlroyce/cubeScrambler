/*
 * Function to Get Scramble
 * By Earl Royce Hugo
 */
 
function getScramble() {

	var scramble = [];
	var turnDisplay;
	
	// Random Number of Moves from 18 to 20
	
	let max = 20;
	let min = 18;
	
	var movesCount = Math.floor(Math.random() * (max - min + 1) ) + min;
	// console.log (movesCount);
 
 
	// Random Moves Based on Number of Moves
	
	// Faces of the cube
	var faceGroup = ["groupR", "groupL", "groupU", "groupD", "groupF", "groupB"];
	
	var groupR = ["R", "R'", "R2"];
	var groupL = ["L", "L'", "L2"];
	var groupU = ["U", "U'", "U2"];
	var groupD = ["D", "D'", "D2"];
	var groupF = ["F", "F'", "F2"];
	var groupB = ["B", "B'", "B2"];
	
	let faceGroupMax = 5;
	let faceGroupMin = 0;
	
	let turnMax = 2;
	let turnMin = 0;
	
	var moveGroup = -1; // initialize
	
	for (i = 0 ; i < movesCount ; i++) {
		
		// No consecutive turns on the same face
		let moveGroupPrev = moveGroup;		
		while (moveGroup == moveGroupPrev) {
			moveGroup = Math.floor(Math.random() * (faceGroupMax - faceGroupMin + 1) ) + faceGroupMin;
		}
		
		// Random Turn to be called per Random Face
		var turn = Math.floor(Math.random() * (turnMax - turnMin + 1) ) + turnMin;
		
		//Display Turn Description
		switch (moveGroup) {
			case 0:
				turnDisplay = groupR[turn];
				break;
			case 1:
				turnDisplay = groupL[turn];
				break;
			case 2:
				turnDisplay = groupU[turn];
				break;
			case 3:
				turnDisplay = groupD[turn];
				break;
			case 4:
				turnDisplay = groupF[turn];
				break;
			case 5:
				turnDisplay = groupB[turn];
				break;
		}
		
		scramble.push(turnDisplay);
	}
	
	// console.log(scramble);
	document.querySelector("img").style.display="none";
	document.getElementById("scrambleDisplay").innerHTML  = scramble.join(" ");
}