function oddEvenMultiply(numbers) {
  if (numbers % 2 === 0) {
    return numbers / 2;
  } else {
    return numbers * 2;
  }
}

let output = oddEvenMultiply(7);
console.log(output);
