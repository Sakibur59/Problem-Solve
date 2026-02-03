const shopping = [
  { name: "Soap", Price: 100, Quantity: 2 },
  { name: "Shampoo", Price: 500, Quantity: 5 },
  { name: "BodyWash", Price: 350, Quantity: 3 },
  { name: "Perfume", Price: 1500, Quantity: 1 },
  { name: "Chips", Price: 50, Quantity: 50 },
];


function totalShopping(shopping){
    let total = 0;
    for (const element of shopping) {
        const ProductCost = 
        total = total + (element.Price * element.Quantity);
    }
    return total
}

const TotalShoping =totalShopping(shopping);
console.log("Total Shopping Price: ",TotalShoping);