const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
  const answers = [];
  const questions = document.querySelectorAll('.question');
  
  questions.forEach((question, index) => {
    const selectedOption = question.querySelector('input:checked');
    if (selectedOption) {
      answers.push({
        question: question.querySelector('p').textContent,
        answer: selectedOption.value
      });
    }
  });
  
  const score = calculateScore(answers);
  showScore(score);
});

function calculateScore(answers) {
  let score = 0;
  answers.forEach(answer => {
    // Implement your scoring logic here
    // For demonstration purposes, let's assume correct answer value is 'a'
    if (answer.answer === 'a') {
      score++;
    }
  });
  return score;
}

function showScore(score) {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `You scored ${score} out of ${document.querySelectorAll('.question').length}.`;
  document.getElementById('score-card').style.display = 'block';
}
