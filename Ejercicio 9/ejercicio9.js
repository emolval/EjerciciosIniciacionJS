const arrayNum = [10, 45, 2, 88, 34];
let mayor = arrayNum[0];
for (let i = 1; i < arrayNum.length; i++) {
  if (arrayNum[i] > mayor) {
    mayor = arrayNum[i];
  }
}
console.log("Mayor número:", mayor);
