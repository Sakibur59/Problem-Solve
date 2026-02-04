function vowelCount(vowel) {
  let count = 0;
  for (const full of vowel) {
    for (const name of full) {
      if (name === "a" || name === "A") {
        count++;
      }
      if (name === "e" || name === "E") {
        count++;
      }
      if (name === "i" || name === "I") {
        count++;
      }
      if (name === "o" || name === "O") {
        count++;
      }
      if (name === "u" || name === "U") {
        count++;
      }
    }
  }

  return count;
}

let vowel = vowelCount(["Md Sakibur Rahman"]);

console.log("Total Vowel: ",vowel);
