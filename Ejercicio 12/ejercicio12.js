const personas = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Juan", edad: 35 }
];
personas.sort(function(a, b) {
  return a.edad - b.edad;
});
console.log(personas);
