// Basketball HORSE Simulator


// Player Scores
var playerOneLetters = "";
var playerTwoLetters = "";


// Player Displays
var playerOneDisplay = document.querySelector('#playerOneLetters');
var playerTwoDisplay = document.querySelector('#playerTwoLetters');

playerOneDisplay.innerHTML = playerOneLetters;
playerTwoDisplay.innerHTML = playerTwoLetters;


// Button Vars
var layupButton = document.querySelector('#layup');
var freeThrowButton = document.querySelector('#freeThrow');
var threePointButton = document.querySelector('#threePointer');
var newGame = document.querySelector('#newGame');
var changeTurn = document.querySelector('#changeTurn');


// Play by Play Vars
var playerOnePlay = document.querySelector('#playerOnePlay');
var playerTwoPlay = document.querySelector('#playerTwoPlay');
var resultPlay = document.querySelector('#resultPlay');


// Player Turn
var playerOneTurn = document.querySelector('#playerOneTurn');
var playerTwoTurn = document.querySelector('#playerTwoTurn');

var playerTurn = true;
 
changeTurn.addEventListener('click', function(){
    if(playerTurn) {
        playerOneTurn.innerHTML = "X";
        playerTwoTurn.innerHTML = "";
        playerTurn = false;
    } else if(!playerTurn) {
        playerOneTurn.innerHTML = "";
        playerTwoTurn.innerHTML = 'X';
        playerTurn = true;
    }
});


// Button listeners
layupButton.addEventListener('click', function(){
    if(playerTurn) {
        if(Math.random() < .8) {
            playerOnePlay.innerHTML = 'Player 1 made a layup.';
            if(Math.random() < .8) {
                playerTwoPlay.innerHTML = 'Player 2 also made a layup.';
            } else {
                playerTwoPlay.innerHTML = 'Player 2 missed!';
                if(playerTwoLetters = '') {
                    playerTwoLetters += 'H';
                    resultPlay.innerHTML = 'Player 2 got an H.';
                }
            }
        } else {
            playerOnePlay.innerHTML = 'Player 1 missed a layup.';
            resultPlay.innerHTML = 'Change turn to Player 2';
        }
        
    } else if (!playerTurn) {

    }
});

freeThrowButton.addEventListener('click', function(){
    if(playerTurn) {
    
    } else if (!playerTurn) {
        
    }
});

threePointButton.addEventListener('click', function(){
    if(playerTurn) {
    
    } else if (!playerTurn) {
        
    }
});


// Reset Game
newGame.addEventListener('click', function(){
    var playerOneLetters = "";
    var playerTwoLetters = "";
});


// End Game
if(playerOneLetters === 'HORSE') {
    document.querySelector('#endGame').innerHTML = 'Player 1 wins!';
} else if (playerOneLetters === 'HORSE') {
    document.querySelector('#endGame').innerHTML = 'Player 2 wins!';
};


