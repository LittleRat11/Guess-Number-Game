const img = document.querySelector(".design-img");
const inputNum = document.querySelector("#guessNum");
const guess = document.querySelector(".guess-btn");
const msg1 = document.querySelector(".msg1");
const msg2 = document.querySelector(".msg2");
const minNum = document.querySelector(".minNum");
const maxNum = document.querySelector(".maxNum");
const min = 1;
const max = 10;
minNum.innerHTML = min;
maxNum.innerHTML = max;
const randomNum = Math.floor(Math.random() * 10) + 1;
let winningNum = randomNum;
let gameRemainder = 3;
guess.addEventListener("click", () => {
    let guessNum = Number(inputNum.value);
    if (guessNum < min || guessNum > max || isNaN(guessNum)) {
        msg2.innerHTML = `Please should be use from ${min} to ${max}`;
        msg2.style.color = 'red';
        img.src = "./picture/ban.jpeg";
        setTimeout(() => {
            msg2.innerHTML = "";
        }, 2000);
    }
    if (guessNum === winningNum) {
        inputNum.disabled = true;
        inputNum.style.borderColor = 'green';
        img.src = "./picture/correct.jpeg";
        guess.innerHTML = "Play Again";
        guess.disabled = "true";
        guess.style.borderColor = " green";
        guess.style.color = 'green';
        msg1.innerHTML = `You are Winner !! You are winning number is ${guessNum} `;
        msg1.style.color = "green";
    } else {
        gameRemainder -= 1;
        if (gameRemainder === 0) {
            inputNum.disabled = true;
            inputNum.style.color = 'red';
            inputNum.style.borderColor = 'red';
            img.src = "./picture/gameover.jpeg";
            guess.disabled = "true";
            msg1.innerHTML = `You are failed ... The winning number is ${winningNum} Keep Try!!!`;
            msg1.style.color = "red";
        } else {
            inputNum.value = "";
            msg1.innerHTML = `Your ${guessNum} is not correct ! You have only ${gameRemainder} time left`;
            msg1.style.color = "red";
        }
    }
})