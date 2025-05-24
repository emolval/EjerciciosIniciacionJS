function tieneLetra(cadena, letra) {
  return cadena.indexOf(letra) !== -1;
}
console.log(tieneLetra("hola", "a")); // true
console.log(tieneLetra("hola", "z")); // false
