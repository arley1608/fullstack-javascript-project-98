import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const isEven = (num) => num % 2 === 0;

const evenNumber = () => {
  const name = greetUser();
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question('Tu respuesta: ').toLowerCase();

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    if (answer === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default evenNumber;
