const numeros = [4, 8, 15, 16, 23, 42];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
const promedio = suma / numeros.length;
console.log("Promedio:", promedio);
