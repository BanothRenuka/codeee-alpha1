let flashcards = [
    { question: "What is HTML?", answer: "HTML is HyperText Markup Language." },
    { question: "What is CSS?", answer: "CSS styles web pages." },
    { question: "What is JavaScript?", answer: "JavaScript adds interactivity to websites." }
];

let currentIndex = 0;
let showingAnswer = false;

const cardContent = document.getElementById("card-content");

function displayCard() {
    if (flashcards.length === 0) {
        cardContent.textContent = "No flashcards available.";
        return;
    }

    if (showingAnswer) {
        cardContent.textContent = flashcards[currentIndex].answer;
    } else {
        cardContent.textContent = flashcards[currentIndex].question;
    }
}

function showAnswer() {
    showingAnswer = !showingAnswer;
    displayCard();
}

function nextCard() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingAnswer = false;
    displayCard();
}

function prevCard() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingAnswer = false;
    displayCard();
}

function addCard() {
    const question = document.getElementById("questionInput").value.trim();
    const answer = document.getElementById("answerInput").value.trim();

    if (question === "" || answer === "") {
        alert("Please enter both question and answer.");
        return;
    }

    flashcards.push({ question, answer });
    document.getElementById("questionInput").value = "";
    document.getElementById("answerInput").value = "";
    currentIndex = flashcards.length - 1;
    showingAnswer = false;
    displayCard();
}

function editCard() {
    if (flashcards.length === 0) return;

    const question = document.getElementById("questionInput").value.trim();
    const answer = document.getElementById("answerInput").value.trim();

    if (question === "" || answer === "") {
        alert("Please enter both question and answer to edit.");
        return;
    }

    flashcards[currentIndex] = { question, answer };
    document.getElementById("questionInput").value = "";
    document.getElementById("answerInput").value = "";
    showingAnswer = false;
    displayCard();
}

function deleteCard() {
    if (flashcards.length === 0) return;

    flashcards.splice(currentIndex, 1);

    if (currentIndex >= flashcards.length) {
        currentIndex = flashcards.length - 1;
    }

    showingAnswer = false;
    displayCard();
}

displayCard();
