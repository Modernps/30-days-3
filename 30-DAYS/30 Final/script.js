// JavaScript animations for a smoother user experience
window.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('.step, .real-life-example, .needs-impact, .implementation');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 300);
    });
});

function showMessage() {
    // Get the paragraph element by ID and make it visible
    document.getElementById("message").style.display = "block";
}

// script.js

function submitQuiz() {
  let score = 0;

  // Get user answers
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');

  // Check answers and calculate score
  if (q1 && q1.value === "correct") score++;
  if (q2 && q2.value === "correct") score++;
  if (q3 && q3.value === "correct") score++;
  if (q4 && q4.value === "correct") score++;

  // Display result
  const result = document.getElementById('result');
  result.textContent = `You scored ${score} out of 4!`;

  // Highlight correct and incorrect answers
  highlightCorrectAnswers();
}

function highlightCorrectAnswers() {
  const correctAnswers = [
    { question: "q1", correctValue: "correct" },
    { question: "q2", correctValue: "correct" },
    { question: "q3", correctValue: "correct" },
    { question: "q4", correctValue: "correct" }
  ];

  correctAnswers.forEach(answer => {
    const correctOption = document.querySelector(`input[name="${answer.question}"][value="${answer.correctValue}"]`);
    const selectedOption = document.querySelector(`input[name="${answer.question}"]:checked`);

    // Color the correct answer green
    if (correctOption) {
      correctOption.parentElement.style.color = 'green';
    }

    // Color the incorrect answer red
    if (selectedOption && selectedOption !== correctOption) {
      selectedOption.parentElement.style.color = 'red';
    }
  });
}
