const words = [
    { word: "apple", hint: "A fruit" },
    { word: "tiger", hint: "A wild animal" },
    { word: "river", hint: "A flowing water body" },
    { word: "phone", hint: "A communication device" },
    { word: "chair", hint: "Used for sitting" }
];

let selectedWord = "";
let displayWord = [];
let wrongLetters = [];

function startGame() {
    const randomObj = words[Math.floor(Math.random() * words.length)];
    selectedWord = randomObj.word;
    document.getElementById("hint").innerText = "Hint: " + randomObj.hint;

    displayWord = Array(selectedWord.length).fill("_");
    wrongLetters = [];

    updateDisplay();
}

function updateDisplay() {
    document.getElementById("wordDisplay").innerText = displayWord.join(" ");
    document.getElementById("wrongLetters").innerText = wrongLetters.join(", ");
}

function guessLetter() {
    const input = document.getElementById("letterInput");
    let letter = input.value.toLowerCase();
    input.value = "";

    if (!letter.match(/[a-z]/)) {
        alert("Enter a valid letter!");
        return;
    }

    if (displayWord.includes(letter) || wrongLetters.includes(letter)) {
        alert("You already guessed that letter!");
        return;
    }

    let found = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            displayWord[i] = letter;
            found = true;
        }
    }

    if (!found) wrongLetters.push(letter);

    updateDisplay();

    if (!displayWord.includes("_")) {
        alert("🎉 Congratulations! You guessed the word: " + selectedWord);
    }
}

function resetGame() {
    startGame();
}

startGame();
