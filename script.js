const selections = document.querySelectorAll(".selections");
const zone = document.querySelector(".zone");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function emojify(text) {
    switch (text) {
        case 'rock':
            return "✊";
        case 'paper':
            return "✋";
        case 'scissors':
            return "✌️";
    }
}

function showGameState(playerChoice, computerChoice, playerWonGame) {
    if (playerChoice==computerChoice) {
        zone.innerHTML = `
            <div class="pS">${playerChoice}</div>
            <div class="cS">${computerChoice}</div>
        `
    } else if (playerWonGame) {
        zone.innerHTML = `
            <div class="pS pWon">${playerChoice}</div>
            <div class="cS">${computerChoice}</div>
        `
    } else {
        zone.innerHTML = `
        <div class="pS">${playerChoice}</div>
        <div class="cS cWon">${computerChoice}</div>
    `
    }
}

function playRound(trg) {
    const playerChoice = trg.target.id;
    const computerChoices = ['rock','paper','scissors'];
    const computerChoice = computerChoices[getRandomInt(3)]
    const winScenarios = ['rockscissors', 'paperrock', 'scissorsrock'];
    const getWinScenario = () => playerChoice + computerChoice
    const playerWonGame = winScenarios.includes(getWinScenario()) //returns true or false
    showGameState(emojify(playerChoice), emojify(computerChoice), playerWonGame)
}

selections.forEach(selection => {
    selection.addEventListener("click", playRound);
})