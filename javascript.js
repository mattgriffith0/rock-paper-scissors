console.log("Hello, World!")

let compScore = 0;
let playerScore = 0;
let round = 0;

const rock = document.querySelector("#rock");
rock.addEventListener('click', choice);

const paper = document.querySelector("#paper");
paper.addEventListener('click', choice);

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', choice);

function restartButton() {
    const restart = document.createElement('button');
    const restartbuttoncontainer = document.createElement('div');
    const gamediv = document.getElementById("game");
    restart.textContent = "New Game";
    restartbuttoncontainer.setAttribute('class', 'restartbtncontainer');
    if (playerScore === 5) {
      restart.setAttribute('class', 'restartbtnwin');
    } else {
      restart.setAttribute('class', 'restartbtnlose')
    }
    gamediv.appendChild(restartbuttoncontainer);
    restartbuttoncontainer.appendChild(restart);
    restart.addEventListener('click', startOver);
}

function startOver() {
    location.reload();
}

function computerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {        
        return "scissors";
    } else {
        return "Something has gone awry";
    }
}

function insertRound(victor) {
  var scoretable = document.getElementById("table");
  var row = scoretable.insertRow(-1);
  var cell = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell.innerHTML = round;
  cell2.innerHTML = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  cell3.innerHTML = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  cell4.innerHTML = victor;
  cell5.innerHTML = playerScore;
  cell6.innerHTML = compScore;
  if (victor === "Player") {
    cell5.setAttribute('class', 'win');
  } else if (victor === "Computer") {
    cell6.setAttribute('class', 'win');
  }
}

function playRound(playerSelection, computerSelection) {
  const winMatrix = {   rock: 'scissors',   paper: 'rock',   scissors: 'paper' }
  if (playerSelection === computerSelection) {
    round++;
    insertRound("Tie");
    return "It's a Tie!"
  } else {
    round++;
    if (winMatrix[playerSelection] === computerSelection) {
      playerScore++;
      insertRound("Player");
      return `You win - ${playerSelection} beats ${computerSelection}! The score is now Player: ${playerScore} Computer: ${compScore}`;
    } else {
      compScore++;
      insertRound("Computer");
      return `You lose - ${computerSelection} beats ${playerSelection}! The score is now Player: ${playerScore} Computer: ${compScore}`;
    }
  }
}

function finished() {
  if (playerScore === 5) {
    var win = `Congratulations, you've won 5 to ${compScore}!`;
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    const result = document.createElement('p');
    const score = document.getElementById("score");
    score.appendChild(result);
    result.textContent = win;
    restartButton();
  } else if (compScore === 5) {
    var lose = `Oh no! The computer beat you 5 to ${playerScore}!`;
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    const result = document.createElement('div');
    resultscontainer.appendChild(result);
    result.textContent = lose;
    restartButton();
  }
}

function choice(click) {
  playerSelection = click.target.id;
  computerSelection = computerChoice();
  document.getElementById("playerchoice").innerHTML = `You've chosen ${playerSelection}.`;
  document.getElementById("compchoice").innerHTML = `The computer chose ${computerSelection}.`;
  playRound(playerSelection, computerSelection);
  finished();
}