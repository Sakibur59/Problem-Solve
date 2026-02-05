function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity,
) {
  let laptopPrice = 35000;
  let tabletPrice = 15000;
  let mobilePrice = 20000;

  let totalBudget = (laptopPrice * laptopQuantity) + (tabletPrice * tabletQuantity) + (mobilePrice*mobileQuantity)

  return totalBudget;
}

let output = calculateElectronicsBudget(1,2,3);
console.log("Total Electronics Budget: ",output);
