function maxNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log("Num1 is Bigger: ", num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log("Num2 is bigger: ", num2);
  }
  else{
    console.log("Num3 is bigger: ",num3);
  }
}

maxNumber(35,78,99);