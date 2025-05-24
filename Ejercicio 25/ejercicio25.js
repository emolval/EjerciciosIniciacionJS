function generarNombre2(c1, c2, c3) {
  if (c1.length < 5 || c2.length < 5 || c3.length < 5) {
    return "error";
  }
  return c1.charAt(c1.length - 1) + c2.charAt(c2.length - 1) + c3.charAt(c3.length - 1);
}
console.log(generarNombre2("mañana", "tierra", "cielo")); // "ana"
