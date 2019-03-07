let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result>p");
const batu_div = document.getElementById("b");
const kertas_div = document.getElementById("k");
const gunting_div = document.getElementById("g");

function getCompChoice() {
    const choices = ['b', 'k', 'g'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function letterToWord(letter) {
    if (letter === "b") return "Batu";
    if (letter === "k") return "Kertas";
    return "Gunting";
}

function win(userChoice, compChoice) {
    const smallUser = "kamu".fontsize(3).sub();
    const smallComp = "bot".fontsize(3).sub();
    const glow = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${letterToWord(userChoice)}${smallUser} lawan ${letterToWord(compChoice)}${smallComp}. Kamu Menang!`;
    glow.classList.add('green-glow');

    setTimeout(() => {
        glow.classList.remove('green-glow')
    }, 300);
}

function lose(userChoice, compChoice) {
    const smallUser = "kamu".fontsize(3).sub();
    const smallComp = "bot".fontsize(3).sub();
    const glow = document.getElementById(userChoice);

    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${letterToWord(userChoice)}${smallUser} lawan ${letterToWord(compChoice)}${smallComp}. Kamu Kalah!`;
    glow.classList.add('red-glow');

    setTimeout(() => {
        glow.classList.remove('red-glow')
    }, 300);
}

function draw(userChoice, compChoice) {
    const smallUser = "kamu".fontsize(3).sub();
    const smallComp = "bot".fontsize(3).sub();
    const glow = document.getElementById(userChoice);

    result_p.innerHTML = `${letterToWord(userChoice)}${smallUser} lawan ${letterToWord(compChoice)}${smallComp}. Imbang!`;
    glow.classList.add('gray-glow');

    setTimeout(() => {
        glow.classList.remove('gray-glow')
    }, 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "bg":
        case "kb":
        case "gk":
            win(userChoice, compChoice);
            break;
        case "bk":
        case "kg":
        case "gb":
            lose(userChoice, compChoice);
            break;
        case "bb":
        case "kk":
        case "gg":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    batu_div.addEventListener('click', () => game("b"));

    kertas_div.addEventListener('click', () => game("k"));

    gunting_div.addEventListener('click', () => game("g"));
}

main();