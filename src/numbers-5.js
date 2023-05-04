let N = parseInt(prompt("Введите число N: "));
let count = 0;

for (let i = 1; i <= N; i++) {
  if (i % 5 === 0) {
    count++;
  }
}

console.log(`Количество положительных чисел кратных 5 и меньше ${N}: ${count}`);