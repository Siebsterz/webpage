var name_player = document.getElementById("playerName");
var added_player = document.getElementById("nameOfPlayer");
var submit_player = document.getElementById("playerForm");

submit_player.addEventListener("click", addNewPlayer);

function addNewPlayer() {
    if(name_player.value === "") {
        alert("no player");
    }
    else {
        added_player.innerHTML = name_player.value;
    }
}
