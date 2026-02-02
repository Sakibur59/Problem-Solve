function need(shirtQuantity, pantQuantity, tshirtQuantity) {
  const perShirtFebric = 5;
  const perPantFebric = 10;
  const perTshirtFebric = 3;

  const shirtFebric = 5 * shirtQuantity;
  const pantFebric = 10 * pantQuantity;
  const tshirtFebric = 3 * tshirtQuantity;

  const totalFebric = shirtFebric + pantFebric + tshirtFebric;
  return totalFebric
}

let needFebric = need(2,5,4);
console.log("Total febric Need : ",needFebric);
