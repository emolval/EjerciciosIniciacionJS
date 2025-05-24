function devuelveMasLarga2(c1, c2, c3) {
  if (c1.length === c2.length || c1.length === c3.length || c2.length === c3.length) {
    return "Hay al menos dos cadenas iguales";
  }
  let mayor = c1;
  if (c2.length > mayor.length) mayor = c2;
  if (c3.length > mayor.length) mayor = c3;
  return mayor;
}
console.log(devuelveMasLarga2("hola", "mundo", "adiós"));
console.log(devuelveMasLarga2("hola", "test", "adiós"));
