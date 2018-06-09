function Player(name) {
    this.name = name;
    this.score = 0;
    this.rank = playerList.length +1;

    this.getName = function() {
        return this.name;
    }

    this.getScore = function() {
        return this.score;
    }

    this.getRank = function() {
        return this.rank;
    }

    this.setWin = function() {
        this.score = this.score +3;
    }

    this.setLose = function() {
        this.score = this.score +1;
    }

    this.toString = function() {
        return this.name;
    }
}

var win = document.getElementById("winButton");
var lose = document.getElementById("loseButton");
win.addEventListener("click", addWin);
lose.addEventListener("click", addLose);

function addWin() {
    playerList[0].setWin();
    score.innerHTML = playerList[0].getScore();
}

function addLose() {
    playerList[0].setLose();
    score.innerHTML = playerList[0].getScore();
}
