import runGame from '../index.js';

const euclides = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const question = `${num1} ${num2}`;
  const answer = euclides(num1, num2);
  return [question, answer];
};

const gcdGame = () => {
  const rules = 'Encuentra el máximo común divisor de los números dados.';
  runGame(rules, generateRound);
};

export default gcdGame;
