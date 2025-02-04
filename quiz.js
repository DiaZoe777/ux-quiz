import { categories } from './questions.js';

let selectedCategory = "";
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongQuestions = [];
let questions = [];

const quizContainer = document.getElementById("quiz-container");

/* --- Automatische Speicherung und Fortsetzen --- */
function saveProgress(index) {
  localStorage.setItem("lastQuestion", index);
}

function resetProgress() {
  localStorage.removeItem("lastQuestion");
  showCategoryMenu();
}

/* --- Startmenü anzeigen --- */
function showCategoryMenu() {
  quizContainer.innerHTML = `
    <h2>Was möchtest du lernen?</h2>
    <div class="menu-options">
      <button class="menu-option" onclick="startQuiz('material')">Material Design</button>
      <button class="menu-option" onclick="startQuiz('hig')">Human Interface Guidelines (HIG)</button>
      <button class="menu-option" onclick="startQuiz('mixed')">Gemischt</button>
    </div>
  `;
}

/* --- Start des Quiz --- */
function startQuiz(category) {
  selectedCategory = category;
  if (category === "material") {
    questions = [...categories.material];
  } else if (category === "hig") {
    questions = [...categories.hig];
  } else if (category === "mixed") {
    questions = [...categories.material, ...categories.hig];
  }
  
  // Automatisches Fortsetzen: Falls ein Fortschritt gespeichert ist
  const savedIndex = localStorage.getItem("lastQuestion");
  currentQuestionIndex = savedIndex !== null ? parseInt(savedIndex, 10) : 0;
  
  correctAnswers = 0;
  wrongQuestions = [];
  showQuestion();
}

/* --- Anzeige der Frage --- */
function showQuestion() {
  const question = questions[currentQuestionIndex];
  quizContainer.innerHTML = `
    <div class="question-container">
      <div class="question">${question.question}</div>
      ${question.element ? `<div class="example-element">${question.element}</div>` : ""}
      <div class="options">
        ${question.options.map((option, index) =>
          `<button class="option" onclick="checkAnswer(${index})">${option}</button>`
        ).join("")}
      </div>
    </div>
  `;
}

/* --- Überprüfung der Antwort --- */
function checkAnswer(selectedIndex) {
  document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
  const question = questions[currentQuestionIndex];
  if (selectedIndex === question.correct) {
    correctAnswers++;
    showFeedback(`✅ Richtig! Gut gemacht!`, true);
  } else {
    const correctText = question.options[question.correct];
    showFeedback(`❌ Leider falsch. Die richtige Antwort ist: "${correctText}". ${question.explanation || ''}`, false);
    wrongQuestions.push(question);
  }
}

/* --- Feedback anzeigen --- */
function showFeedback(message, isCorrect) {
  quizContainer.innerHTML += `
    <div class="feedback ${isCorrect ? "" : "wrong"}">${message}</div>
    <div class="button-container">
      <button onclick="nextQuestion()">Weiter</button>
    </div>
  `;
}

/* --- Zur nächsten Frage --- */
function nextQuestion() {
  currentQuestionIndex++;
  saveProgress(currentQuestionIndex); // Fortschritt speichern
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

/* --- Quiz abschließen --- */
function endQuiz() {
  quizContainer.innerHTML = `
    <h2>Quiz abgeschlossen!</h2>
    <p>Du hast ${correctAnswers} von ${questions.length} Fragen richtig beantwortet.</p>
    ${
      wrongQuestions.length > 0
        ? `<p>Es gibt ${wrongQuestions.length} Karte(n), die du erneut lernen kannst.</p>
           <div class="button-container"><button onclick="retryWrongQuestions()">Erneut lernen</button></div>`
        : `<p>Super, du hast alle Fragen gemeistert!</p>`
    }
  `;
  // Optional: Fortschritt löschen
  // localStorage.removeItem("lastQuestion");
}

/* --- Falsche Fragen erneut üben --- */
function retryWrongQuestions() {
  questions = [...wrongQuestions];
  wrongQuestions = [];
  currentQuestionIndex = 0;
  correctAnswers = 0;
  showQuestion();
}

/* --- Haus-Icon (Lernfortschritt zurücksetzen) --- */
document.getElementById("home-icon").addEventListener("click", function() {
  if (confirm("Achtung: Der Lernfortschritt geht verloren. Möchtest du den Lernfortschritt löschen und zur Startseite zurückkehren?")) {
    resetProgress();
  }
});

// Funktionen global verfügbar machen, damit Inline-Eventhandler funktionieren:
window.startQuiz = startQuiz;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.retryWrongQuestions = retryWrongQuestions;

// Startmenü anzeigen:
showCategoryMenu();
