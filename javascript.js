console.log("Hello, World!")

let compScore = 0;
let playerScore = 0;
let round = 0;

const rock = document.querySelector("#rock");
rock.addEventListener('click', chooseRock);

const paper = document.querySelector("#paper");
paper.addEventListener('click', choosePaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', chooseScissors);

function restartButton() {
    const restart = document.createElement('button');
    restart.textContent = "New Game";
    restart.setAttribute('id', 'restart');
    resultscontainer.appendChild(restart);
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

function insertRound() {
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
  cell4.innerHTML = "Tie";
  cell5.innerHTML = playerScore;
  cell6.innerHTML = compScore;
}

function insertRoundWin() {
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
    cell4.innerHTML = winner;
    cell5.innerHTML = playerScore;
    cell6.innerHTML = compScore;
    cell5.setAttribute('class', 'win');
}

function insertRoundLose() {
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
  cell4.innerHTML = winner;
  cell5.innerHTML = playerScore;
  cell6.innerHTML = compScore;
  cell6.setAttribute('class', 'win');
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    round++;
    insertRound();
    return "It's a Tie!"
  } else if (computerSelection === "rock" && playerSelection === "paper" ) {
    winner = "Player";
    round++;
    playerScore ++;
    insertRoundWin();
    return `You win - paper beats rock! The score is now Player: ${playerScore} Computer: ${compScore}`;
  } else if (computerSelection === "rock" && playerSelection === "scissors" ) {
    winner = "Computer";
    round++;
    compScore ++;
    insertRoundLose();
    return `You lose - rock beats scissors! The score is now Player: ${playerScore} Computer: ${compScore}`;
  } else if (computerSelection === "paper" && playerSelection === "rock" ) {
    winner = "Computer";
    round++;
    compScore ++;
    insertRoundLose();
    return `You lose - paper beats rock! The score is now Player: ${playerScore} Computer: ${compScore}`;
  } else if (computerSelection === "paper" && playerSelection === "scissors" ) {
    winner = "Player"
    round++;
    playerScore ++;
    insertRoundWin();
    return `You win - scissors beats paper! The score is now Player: ${playerScore} Computer: ${compScore}`;
  } else if (computerSelection === "scissors" && playerSelection === "paper" ) {
    winner = "Computer";
    round++;
    compScore ++;
    insertRoundLose();
    return `You lose - scissors beats paper! The score is now Player: ${playerScore} Computer: ${compScore}`;
  } else if (computerSelection === "scissors" && playerSelection === "rock" ) {
    winner = "Player";
    round++;
    playerScore ++;
    insertRoundWin();
    return `You win - rock beats scissors! The score is now Player: ${playerScore} Computer: ${compScore}`;
  }
}

function finished() {
  if (playerScore === 5) {
    var win = `Congratulations, you've won 5 to ${compScore}!`;
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    const result = document.createElement('div');
    resultscontainer.appendChild(result);
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

function chooseRock() {
  playerSelection = 'rock';
  computerSelection = computerChoice();
  document.getElementById("playerchoice").innerHTML = `You've chosen ${playerSelection}.`;
  document.getElementById("compchoice").innerHTML = `The computer chose ${computerSelection}.`;
  playRound(playerSelection, computerSelection);
  finished();
}

function choosePaper() {
  playerSelection = 'paper';
  computerSelection = computerChoice();
  document.getElementById("playerchoice").innerHTML = `You've chosen ${playerSelection}.`;
  document.getElementById("compchoice").innerHTML = `The computer chose ${computerSelection}.`;
  playRound(playerSelection, computerSelection);
  finished();
}

function chooseScissors() {
  playerSelection = 'scissors';
  computerSelection = computerChoice();
  document.getElementById("playerchoice").innerHTML = `You've chosen ${playerSelection}.`;
  document.getElementById("compchoice").innerHTML = `The computer chose ${computerSelection}.`;
  playRound(playerSelection, computerSelection);
  finished();
}