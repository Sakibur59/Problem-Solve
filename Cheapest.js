const mobiles = [
    {name:"Motorola",Price:48000,Color:"Blue"},
    {name:"Redmi",Price:35000,Color:"Black"},
    {name:"Iphone",Price:154000,Color:"Orange"},
    {name:"Oppo",Price:32000,Color:"White"},
    {name:"Nokia",Price:12000,Color:"Blue"},

]

function cheapestPhone(mobile){
    let cheap = mobile[0];
    for (const phone of mobile) {
        if(phone.Price < cheap.Price){
            cheap = phone;
        }
    }
    return cheap;
}

const cheapestOne = cheapestPhone(mobiles);
console.log("Cheapest Phone price: ",cheapestOne);