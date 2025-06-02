let targetNumber = Math.floor(Math.random() * 20) + 1;
let currentScore = 20;
let bestScore = 0;

const updateMessage = (text) => {
  document.querySelector('.message').textContent = text;
};

document.querySelector('.check').addEventListener('click', () => {
  const userGuess = Number(document.querySelector('.guess').value);

  if (!userGuess) {
    updateMessage('Please enter a number!');
    return;
  }

  if (userGuess === targetNumber) {
    updateMessage('You nailed it!');
    document.querySelector('.number').textContent = targetNumber;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (currentScore > bestScore) {
      bestScore = currentScore;
      document.querySelector('.highscore').textContent = bestScore;
    }

  } else {
    if (currentScore > 1) {
      const hint = userGuess > targetNumber ? 'Try lower!' : 'Try higher!';
      updateMessage(hint);
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      updateMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  currentScore = 20;
  targetNumber = Math.floor(Math.random() * 20) + 1;

  updateMessage('Ready to guess...');
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
