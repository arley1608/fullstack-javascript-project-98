import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const rounds = 3;

const runGame = (rules, generateRound) => {
  const name = greetUser();
  console.log(rules);

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Pregunta: ${question}`);
    const answer = readlineSync.question('Tu respuesta: ');

    if (answer !== correctAnswer.toString()) {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;
