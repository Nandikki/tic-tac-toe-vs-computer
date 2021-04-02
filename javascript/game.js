
const statusDisplay = document.querySelector('.status');
/*
Here we declare some variables that we will use to track the 
game state throught the game. 
*/
/*
We will use gameActive to pause the game in case of an end scenario
*/
let onGame = true; // is the game happening?
/*
We will store our current player here, so we know whos turn 
*/
let currentPlayer = 1;
/*
We will store our current game state here, the form of empty strings in an array
 will allow us to easily track played cells and validate the game state later on
*/
let gameGrid = ["", "", "", 
				"", "", "", 
				"", "", ""];
/*
Here we have declared some messages we will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.
*/
const winningMessage = (cwinner) => (cwinner == 1) ? `Player has won!` : `Computer has won, of course!`;
const drawMessage = () => `Game ended in a draw!`;
const currentTurn = () => (currentPlayer == 1) ? `It's your turn!` : `The Computer will play now.`;
/*
We set the inital message to let the players know whose turn it is
*/
statusDisplay.innerHTML = currentTurn();

function resultValidation() {
	///////////
	// Verifies if Player 1 Won 
	//////////
	// Horizontal
	if (gameGrid[0] == 1)
		if (gameGrid[1] == 1)
			if (gameGrid[2] == 1)
				setWinner(1);
	if (gameGrid[3] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[5] == 1)
				setWinner(1);
	if (gameGrid[6] == 1)
		if (gameGrid[7] == 1)
			if (gameGrid[8] == 1)
				setWinner(1);

	//Vertical
	if (gameGrid[0] == 1)
		if (gameGrid[3] == 1)
			if (gameGrid[6] == 1)
				setWinner(1);
	if (gameGrid[1] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[7] == 1)
				setWinner(1);
	if (gameGrid[2] == 1)
		if (gameGrid[5] == 1)
			if (gameGrid[8] == 1)
				setWinner(1);

	//Diagonal
	if (gameGrid[0] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[8] == 1)
				setWinner(1);
	if (gameGrid[2] == 1)
		if (gameGrid[4] == 1)
			if (gameGrid[6] == 1)
				setWinner(1);

	///////////
	// Verifies if Player 2 Won 
	//////////
	// Horizontal
	if (gameGrid[0] == 2)
		if (gameGrid[1] == 2)
			if (gameGrid[2] == 2)
				setWinner(2);
	if (gameGrid[3] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[5] == 2)
				setWinner(2);
	if (gameGrid[6] == 2)
		if (gameGrid[7] == 2)
			if (gameGrid[8] == 2)
				setWinner(2);

	//Vertical
	if (gameGrid[0] == 2)
		if (gameGrid[3] == 2)
			if (gameGrid[6] == 2)
				setWinner(2);
	if (gameGrid[1] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[7] == 2)
				setWinner(2);
	if (gameGrid[2] == 2)
		if (gameGrid[5] == 2)
			if (gameGrid[8] == 2)
				setWinner(2);

		//Diagonal
	if (gameGrid[0] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[8] == 2)
				setWinner(2);
	if (gameGrid[2] == 2)
		if (gameGrid[4] == 2)
			if (gameGrid[6] == 2)
				setWinner(2);

	///////////
	// Verifies Draw 
	//////////
	let ctrl = true;
	for (i = 0; i < 9; i++)
		if (gameGrid[i] == "")
			ctrl = false;
	if (ctrl)
		setWinner(3);
}

function setWinner(winner) {
	if(winner == 1) {
		onGame = false;
		statusDisplay.innerHTML = winningMessage(1);
	}

	if(winner == 2) {
		onGame = false;
		statusDisplay.innerHTML = winningMessage(2);
	}

	if(winner == 3 && onGame) {
		onGame = false;
		statusDisplay.innerHTML = drawMessage();
	}

}

//Verifies if the movement was valid.
function isValid(index) {
	return (gameGrid[index] == "");
}

function getColor() {
	return ((currentPlayer == 1) ? "p_one" : "p_two");
}

//When a slot is selected, this function is called.
function cellClick(e) {
	const cell = e.target; 
	const index = parseInt(cell.getAttribute('index'));

	if (isValid(index) && onGame && currentPlayer == 1) {
		gameGrid[index] = currentPlayer;
		e.srcElement.setAttribute("id", getColor());
		statusDisplay.innerHTML = currentTurn();
		resultValidation();
		currentPlayer = (currentPlayer == 1 ? 2 : 1);
		computer_plays();
	}

}

function computer_plays() {
	if (!onGame)
		return 0;
	let moved = false;
	let i;
	for (i = 0; i < 8; i++) {
		console.log("Computer is trying to play at " + i + " to try to win.");
		if (gameGrid[i] == "") {
			console.log("Verifying if this position will make Computer wins");
			gameGrid[i] = 2;
			let computerWin = false;
			///////////
			// Verifies if Player 2 Won 
			//////////
			// Horizontal
			if (gameGrid[0] == 2)
				if (gameGrid[1] == 2)
					if (gameGrid[2] == 2)
						computerWin = true;
			if (gameGrid[3] == 2)
				if (gameGrid[4] == 2)
					if (gameGrid[5] == 2)
						computerWin = true;
			if (gameGrid[6] == 2)
				if (gameGrid[7] == 2)
					if (gameGrid[8] == 2)
						computerWin = true;

			//Vertical
			if (gameGrid[0] == 2)
				if (gameGrid[3] == 2)
					if (gameGrid[6] == 2)
						computerWin = true;
			if (gameGrid[1] == 2)
				if (gameGrid[4] == 2)
					if (gameGrid[7] == 2)
						computerWin = true;
			if (gameGrid[2] == 2)
				if (gameGrid[5] == 2)
					if (gameGrid[8] == 2)
						computerWin = true;

				//Diagonal
			if (gameGrid[0] == 2)
				if (gameGrid[4] == 2)
					if (gameGrid[8] == 2)
						computerWin = true;
			if (gameGrid[2] == 2)
				if (gameGrid[4] == 2)
					if (gameGrid[6] == 2)
						computerWin = true;
					

			if (computerWin) {
				console.log("Computer won moving to " + i);
				resultValidation();
				moved = true;
				document.querySelector(".cell[index=" + CSS.escape(i) + "]").setAttribute("id", "p_two");
				break;
			} else {
				gameGrid[i] = "";
			}
		} else {
			console.log(i + " position is already occupied.");
			continue;
		}
	}

		/*
					If it is not possible to win in the next round, computer should
					calculates if the Player can win in the next round, and avoid it.
		*/

	for (i = 0; i < 8; i++) {
			if (moved)
				break;
		console.log("Computer is trying to play at " + i + " to try to avoid Player's victory.");
		if (gameGrid[i] == "") {
			console.log("Verifying if this position will make player wins");
			gameGrid[i] = 1;
			let playerWin = false;
			///////////
			// Verifies if Player 2 Won 
			//////////
			// Horizontal
			if (gameGrid[0] == 1)
				if (gameGrid[1] == 1)
					if (gameGrid[2] == 1)
						playerWin = true;
			if (gameGrid[3] == 1)
				if (gameGrid[4] == 1)
					if (gameGrid[5] == 1)
						playerWin = true;
			if (gameGrid[6] == 1)
				if (gameGrid[7] == 1)
					if (gameGrid[8] == 1)
						playerWin = true;

			//Vertical
			if (gameGrid[0] == 1)
				if (gameGrid[3] == 1)
					if (gameGrid[6] == 1)
						playerWin = true;
			if (gameGrid[1] == 1)
				if (gameGrid[4] == 1)
					if (gameGrid[7] == 1)
						playerWin = true;
			if (gameGrid[2] == 1)
				if (gameGrid[5] == 1)
					if (gameGrid[8] == 1)
						playerWin = true;

				//Diagonal
			if (gameGrid[0] == 1)
				if (gameGrid[4] == 1)
					if (gameGrid[8] == 1)
						playerWin = true;
			if (gameGrid[2] == 1)
				if (gameGrid[4] == 1)
					if (gameGrid[6] == 1)
						playerWin = true;
					
			if (playerWin) {
				console.log("Player will win if he moves to " + i);
				console.log("Computer will avoid that.");
				gameGrid[i] = 2;
				document.querySelector(".cell[index=" + CSS.escape(i) + "]").setAttribute("id", "p_two");
				resultValidation();
				currentPlayer = 1; // Player round now.
				moved = true;
				break;
			} else {
				gameGrid[i] = "";
				console.log("Player won't win next round.");
			}
		} else {
			console.log(i + " position is already occupied.");
			continue;
	}
}
		/*
					If it is not possible to win in the next round, and Player won't win next round, play randomly.
		*/
		if (moved)
			return 0;
		i = Math.floor(Math.random() * 9);
		while (gameGrid[i] != "") 
			i = Math.floor(Math.random() * 9);
		console.log("Computer played randomly: " + i);
		gameGrid[i] = 2;
		document.querySelector(".cell[index=" + CSS.escape(i) + "]").setAttribute("id", "p_two");
		currentPlayer = 1; // Player round now.
	}


function restartGame() {
	gameGrid = ["", "", "", 
					"", "", "", 
					"", "", ""];
	document.querySelectorAll('.cell').forEach(cell => cell.setAttribute("id", ""));
	currentPlayer = 1;
	statusDisplay.innerHTML = currentTurn();
	onGame = true;
}
/*
And finally we add our event listeners to the actual game cells, as well as our 
restart button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restartBtn').addEventListener('click', restartGame);