// Correct image index (1 or 2)
const correctAnswer = 2;

function checkAnswer(selected) {
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const feedback = document.getElementById('feedback');

  // Reset the border colors
  img1.classList.remove('selected');
  img2.classList.remove('selected');

  // Check if the selected answer is correct
  if (selected === correctAnswer) {
    feedback.textContent = "Correct! You selected the right image.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.style.color = "red";
  }

  // Highlight the selected image
  document.getElementById(`img${selected}`).classList.add('selected');
}

// Correct image index (1 or 2)
const correctAnswer1 = 1;

function checkAnswer1(selected) {
  const img3 = document.getElementById('img3');
  const img4 = document.getElementById('img4');
  const feedback1 = document.getElementById('feedback1');

  // Reset the border color
  img3.classList.remove('selected1');
  img4.classList.remove('selected1');

  // Check if the selected answer is correct
  if (selected === correctAnswer1) {
    feedback1.textContent = "Correct! You selected the right image.";
    feedback1.style.color = "green";
  } else {
    feedback1.textContent = "Incorrect. Try again!";
    feedback1.style.color = "red";
  }

  // Highlight the selected image
  document.getElementById(`img${selected1}`).classList.add('selected1');
}


// Correct image index (1 or 2)
const correctAnswer2 = 2;

function checkAnswer2(selected) {
  const img5 = document.getElementById('img5');
  const img6 = document.getElementById('img6');
  const feedback2 = document.getElementById('feedback2');

  // Reset the border color
  img5.classList.remove('selected2');
  img6.classList.remove('selected2');

  // Check if the selected answer is correct
  if (selected === correctAnswer2) {
    feedback2.textContent = "Correct! You selected the right image.";
    feedback2.style.color = "green";
  } else {
    feedback2.textContent = "Incorrect. Try again!";
    feedback2.style.color = "red";
  }

  // Highlight the selected image
  document.getElementById(`img${selected2}`).classList.add('selected2');
}
