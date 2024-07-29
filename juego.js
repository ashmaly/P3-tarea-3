let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const piedra_div = document.getElementById("Piedra");
const papel_div = document.getElementById("Papel");
const tijera_div = document.getElementById("Tijera");

function getComputerChoice() {
    const choices = ['Piedra', 'Papel', 'Tijera'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " le gana a " + computerChoice + ". ¡Ganaste!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + " le gana a " + userChoice + ". Perdiste.";
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = userChoice + " es igual a " + computerChoice + ". Es un empate.";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "PiedraTijera":
        case "PapelPiedra":
        case "TijeraPapel":
            win(userChoice, computerChoice);
            break;
        case "PiedrPapel":
        case "PapelTijera":
        case "TijeraPapel":
            lose(userChoice, computerChoice);
            break;
        case "PiedraPiedra":
        case "PapelPapel":
        case "TijeraTijera":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    piedra_div.addEventListener('click', function() {
        game("Piedra");
    })

    papel_div.addEventListener('click', function() {
        game("Papel");
    })

    tijera_div.addEventListener('click', function() {
        game("Tijera");
    })
}

main();