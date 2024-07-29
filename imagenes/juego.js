let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const pieda_div = document.getElementById("P");
const papel_div = document.getElementById("Pa");
const tijera_div = document.getElementById("T");

function getComputerChoice() {
    const choices = ['P','Pa','T'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + "beats" + computerChoice + ". You win!!!"
}

function lose() {

}

function draw() {
    console.log("DRAWWW");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "PT":
        case "PaP":
        case "TPa":
        win(userChoice,computerChoice);
        break;
        case "PPa":
        case "PaT":
        case "TP":
        lose(userChoice,computerChoice);
        break;
        case "PP":
        case "PaPa":
        case "TT":
        draw(userChoice,computerChoice);
        break;
    }
}
