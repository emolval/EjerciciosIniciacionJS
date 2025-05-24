const readline = require('readline');

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (input) => {
  const numero = parseInt(input);
  if (esPrimo(numero)) {
    console.log(numero + " es primo");
  } else {
    console.log(numero + " no es primo");
  }
  rl.close();
});
