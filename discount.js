function discount(Quantity) {
  if (Quantity <= 100) {
    const total = Quantity * 100;
    return total;
  } else if (Quantity <= 200) {
    const total = Quantity * 90;
    return total;
  }
  else {
    const total = Quantity * 80;
    return total;
  }

}

const grandTotal = discount(201);
console.log("Total Price: ",grandTotal);
