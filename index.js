function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = +document.querySelector('.amount').value;

  let headCounter = 0;
  let tailCounter = 0;

  for (let i = 0; i < amount; i++) {
   randomInteger(1, 2) === 1 ? headCounter++ : tailCounter++;
  }

  const headsPercent = (headCounter / amount * 100).toFixed(2);
  const tailsPercent = (100 - headsPercent).toFixed(2);

  document.querySelector('.head__times').innerHTML = `${headCounter} (${headsPercent}%)`;
  document.querySelector('.tail__times').innerHTML = `${tailCounter} (${tailsPercent}%)`;
  
  const difference = document.querySelector('.difference');
  difference.style.display = 'block';
  difference.innerHTML = `Разница: ${Math.abs(headCounter - tailCounter)}`;
});
