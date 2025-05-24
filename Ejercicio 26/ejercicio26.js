function generarNombre3(c1, c2, c3) {
  if (c1.length < 5 || c2.length < 5 || c3.length < 5) {
    return "error";
  }
  return c1.slice(-3) + c2.slice(-3) + c3.slice(-3);
}
console.log(generarNombre3("mañana", "tierra", "cielo")); // "nanaerroelo"
