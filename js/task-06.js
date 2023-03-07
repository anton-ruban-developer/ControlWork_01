let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число:");
  numbers.push(Number(input));
}

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
}

console.log(`Загальна сума чисел дорівнює : ${total}`);
