function countHowManyNumber(numbers, num) {
  let count = 0;
  for (const element of numbers) {
    if (element === num) {
      count++;
    }
  }

  return count;
}

let numbers = [5, 6, 11, 12, 98, 5];
let num = 5;

let output = countHowManyNumber(numbers, num);
console.log("Total times of:", num, "is repeated", output);
