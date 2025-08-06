import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const evenNumber = () => {
  const rules = 'Responde "yes" si el número es par, de lo contrario responde "no".';
  runGame(rules, generateRound);
};

export default evenNumber;
