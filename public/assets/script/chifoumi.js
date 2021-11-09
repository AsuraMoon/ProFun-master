/* Buttons */
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');
const stoneButton = document.getElementById('stone');

/* Game fonts to the DOM */
const scissorsDOM = document.getElementById('scissorsDOM');
const paperDOM = document.getElementById('paperDOM');
const stoneDOM = document.getElementById('stoneDOM');

/* Result on each attempt */
const result = document.getElementById('result');

/* Table results */
const table = document.getElementById('table');
const count = document.getElementById('count');
const playerScore = document.getElementById('playerScore');
const opponentScore = document.getElementById('opponentScore');

/* Result of the game and button to replay */
const verdict = document.getElementById('verdict');
const replay = document.getElementById('replay');

/* Game Fonts */
const scissorsFont = '<span class="far fa-hand-scissors"></span>';
const paperFont = '<span class="far fa-hand-paper"></span>';
const stoneFont = '<span class="far fa-hand-rock"></span>';

/* Counters */
let i = 1; let p = 1; let c = 1;

/* We hide the table initially */
table.style.display = 'none';

/* When we click on the scissors button */
scissorsButton.addEventListener('click', function() {

    /* We hide the other fonts */
    paperDOM.style.display = 'none';
    stoneDOM.style.display = 'none';

    /* We display the table and the scissors font */
    table.style.display = 'block';
    scissorsDOM.style.display = 'block';
    scissorsDOM.style.fontSize = '15vh';

    /* We generate the opponent's font */
    let randomNumber = intRandom(0,2);
    let computer = randomFont(randomNumber);
    scissorsDOM.innerHTML = scissorsFont + " VS " + computer;

    if (computer == scissorsFont) {
        result.innerHTML = "";
        result.style.color = "blue";
        result.innerHTML = 'Egalité ! <span class="far fa-meh"></span>';
    }

    else {

        if (computer == paperFont) {
            result.textContent = "";
            result.style.color = "green";
            result.innerHTML = 'Gagné ! <span class="far fa-grin-tongue-wink"></span>';
            playerScore.textContent = p++;
        }

        else if (computer == stoneFont) {
            result.textContent = "";
            result.style.color = "red";
            result.innerHTML = 'Perdu ! <span class="far fa-sad-cry"></span>';
            opponentScore.textContent = c++;
        }
        
    }

    /* We display the number of tests and we display zero if no value */
    count.textContent = i++ + "°";
    addZero();

    gameOver(i);

});

/* When we click on the paper button */
paperButton.addEventListener('click', function() {

    /* We hide the other fonts */
    scissorsDOM.style.display = 'none';
    stoneDOM.style.display = 'none';

    /* We display the table and the paper font */
    table.style.display = 'block';
    paperDOM.style.display = 'block';
    paperDOM.style.fontSize = '15vh';
    paperDOM.innerHTML = paperFont;

    /* We generate the opponent's font */
    let randomNumber = intRandom(0,2);
    let computer = randomFont(randomNumber);
    paperDOM.innerHTML = paperFont + " VS " + computer;

    if (computer == paperFont) {
        result.textContent = "";
        result.style.color = "blue";
        result.innerHTML = 'Egalité ! <span class="far fa-meh"></span>';
    }

    else {

        if (computer == stoneFont) {
            result.textContent = "";
            result.style.color = "green";
            result.innerHTML = 'Gagné ! <span class="far fa-grin-tongue-wink"></span>';
            playerScore.textContent = p++;
        }

        else if (computer == scissorsFont) {
            result.textContent = "";
            result.style.color = "red";
            result.innerHTML = 'Perdu ! <span class="far fa-sad-cry"></span>';
            opponentScore.textContent = c++;
        }

    }

    /* We display the number of tests and we display zero if no value */
    count.textContent = i++ + "°";
    addZero();

    gameOver(i);

});

/* When we click on the stone button */
stoneButton.addEventListener('click', function() {

    /* We hide the other fonts */
    paperDOM.style.display = 'none';
    scissorsDOM.style.display = 'none';

    /* We display the table and the stone font */
    table.style.display = 'block';
    stoneDOM.style.display = 'block';
    stoneDOM.style.fontSize = '15vh';
    stoneDOM.innerHTML = stoneFont;

    /* We generate the opponent's font */
    let randomNumber = intRandom(0,2);
    let computer = randomFont(randomNumber);
    stoneDOM.innerHTML = stoneFont + " VS " + computer;

    if (computer == stoneFont) {
        result.textContent = "";
        result.style.color = "blue";
        result.innerHTML = 'Egalité ! <span class="far fa-meh"></span>';
    }

    else {

        if (computer == scissorsFont) {
            result.textContent = "";
            result.style.color = "green";
            result.innerHTML = 'Gagné ! <span class="far fa-grin-tongue-wink"></span>';
            playerScore.textContent = p++;
        }

        else if (computer == paperFont) {
            result.textContent = "";
            result.style.color = "red";
            result.innerHTML = 'Perdu ! <span class="far fa-sad-cry"></span>';
            opponentScore.textContent = c++;
        }

    }

    /* We display the number of tests and we display zero if no value */
    count.textContent = i++ + "°";
    addZero();

    gameOver(i);

});

/* If 3 attempts the buttons are disabled, we generate a button that reloads the page and we display the result of the game */
function gameOver(i) {

    i = i-1;

    playerInTable = playerScore.innerHTML;
    opponentInTable = opponentScore.innerHTML;

    if (i === 3) {
        scissors.setAttribute("disabled", "");
        paper.setAttribute("disabled", "");
        stone.setAttribute("disabled", "");
        replay.innerHTML = '<button class="btn btn-info" id="reload" onclick="reload()">Rejouer <span class="far fa-hand-pointer"></span></button>';
        
        if (playerInTable > opponentInTable) {
            verdict.style.color = "green";
            verdict.innerHTML = 'Vous avez gagné la partie ! <span class="far fa-grin-tongue-wink"></span>';
        }

        else if (playerInTable < opponentInTable) { 
            verdict.style.color = "red";
            verdict.innerHTML = 'Vous avez perdu la partie ! <span class="far fa-sad-cry"></span>';
        }

        else {
            verdict.style.color = "blue";
            verdict.innerHTML = 'Aucun gagnant, aucun perdant ! <span class="far fa-meh"></span>';
        }

    }                

}

/* Function that reloads the page */
function reload() {
    document.location.reload(true);
}

/* Function that add a zero when no values */
function addZero() {   

    if (playerScore.innerHTML == "") {
        playerScore.innerHTML = 0;
    }

    if (opponentScore.innerHTML == "") {
        opponentScore.innerHTML = 0;
    }

}

/* Function that generate a random number */
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Function that generate a random font for the opponent */
function randomFont(randomNumber) {

    switch (randomNumber) {
        case 0: return scissorsFont; break;
        case 1: return paperFont; break;
        case 2: return stoneFont; break;
    }

}
