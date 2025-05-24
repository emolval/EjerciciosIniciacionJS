const gente = [
  { nombre: "Juan", apellido: "Pérez" },
  { nombre: "Ana", apellido: "García" },
  { nombre: "Luis", apellido: "García" },
  { nombre: "Pedro", apellido: "Pérez" }
];

gente.sort(function(a, b) {
  if (a.apellido < b.apellido) return -1;
  if (a.apellido > b.apellido) return 1;
  // Si apellidos iguales, ordenar por nombre
  if (a.nombre < b.nombre) return -1;
  if (a.nombre > b.nombre) return 1;
  return 0;
});
console.log(gente);
