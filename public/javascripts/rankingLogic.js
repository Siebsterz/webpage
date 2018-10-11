var name_player = document.getElementById("playerName");
var rank_player = document.getElementById("rankOfPlayer");
var added_player = document.getElementById("nameOfPlayer");
var submit_player = document.getElementById("submitNameButton");
var score = document.getElementById("scoreOfPlayer");

var playerList = [];

submit_player.addEventListener("click", addNewPlayer);

function addNewPlayer() {
    if(name_player.value === "") {
        alert("no player");
        return null;
    }
    else {
        var newPlayer = new Player(name_player.value);
        console.log(newPlayer);
        playerList.push(newPlayer);
        added_player.innerHTML = playerList.toString();
    }
}
