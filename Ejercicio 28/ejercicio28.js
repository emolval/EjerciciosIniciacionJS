function tieneLetraIgnoreCase(cadena, letra) {
  return cadena.toLowerCase().indexOf(letra.toLowerCase()) !== -1;
}
console.log(tieneLetraIgnoreCase("Hola", "A")); // true
