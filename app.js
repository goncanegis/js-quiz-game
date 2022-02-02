const correctAnswers = ['D', 'D', 'C', 'C', 'D'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const scoreText = document.querySelector('.score-text');
const resultText = document.querySelector('.result-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  // Check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 100 / correctAnswers.length;
    }
  });

  // Show results
  if (score < 50) {
    resultText.textContent = 'Oops, not enough silliness!';
  } else if (50 < score && score < 80) {
    resultText.textContent = 'Ooh not bad at all!';
  } else if (80 < score) {
    resultText.textContent = 'Wow, silly AND a genius!';
  }

  result.classList.remove('d-none');

  scroll({
    top: 10,
    behavior: 'smooth',
  });

  let output = 0;
  const timer = setInterval(() => {
    scoreText.innerHTML = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
