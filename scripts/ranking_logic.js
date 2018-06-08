var name_player = document.getElementById("playerName");
var added_player = document.getElementById("nameOfPlayer");
var submit_player = document.getElementById("submitName");
var win = document.getElementById("winButton");
var lose = document.getElementById("loseButton");
var score = document.getElementById("scoreOfPlayer");
var players = [];
var playerScore = 0;

submit_player.addEventListener("click", addNewPlayer);

function addNewPlayer() {
    if(name_player.value === "") {
        alert("no player");
    }
    else {
        added_player.innerHTML = name_player.value;
    }
}

win.addEventListener("click", addWin);
lose.addEventListener("click", addLose);

function addWin() {
    playerScore = playerScore +3;
    score.innerHTML = parseFloat(playerScore);
}

function addLose() {
    playerScore = playerScore +1;
    score.innerHTML = parseFloat(playerScore);
}
