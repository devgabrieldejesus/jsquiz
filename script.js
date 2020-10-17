// list with question
const quizData = [
  {
    question: "Qual é o número 1?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "a",
  },
  {
    question: "Qual é o número 2?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "b",
  },
];

// selecting items
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const questionA = document.getElementById("questionA");
const questionB = document.getElementById("questionB");
const questionC = document.getElementById("questionC");
const questionD = document.getElementById("questionD");
const submitButton = document.getElementById("submit");

// defining the values of the current questionnaire and points
let currentQuiz = 0;
let score = 0;

// execute function load the quiz
loadQuiz();

// function load the quiz
function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerHTML = currentQuizData.question;
  questionA.innerHTML = currentQuizData.a;
  questionB.innerHTML = currentQuizData.b;
  questionC.innerHTML = currentQuizData.c;
  questionD.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

// when submitting the form
submitButton.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>Você acertou ${score} de ${quizData.length} questões.</h2>

                <button onclick="location.reload()">Tentar de novo</button>
            `;
    }
  }
});