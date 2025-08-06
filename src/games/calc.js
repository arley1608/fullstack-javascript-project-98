import runGame from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);
  return [question, answer];
};

const calculator = () => {
  const rules = '¿Cuál es el resultado de la expresión?';
  runGame(rules, generateRound);
};

export default calculator;
