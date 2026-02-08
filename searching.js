let products = [
    {name:"Iphone Mobile",brand:"Apple",Price:168000},
    {name:"Xiomi mobile",brand:"Apple",Price:68000},
    {name:"Motorola Mobile",brand:"Apple",Price:48000},
    {name:"nokia old mobile",brand:"Apple",Price:8000},
    {name:"Iqoo",brand:"Apple",Price:54000},
    {name:"Oppo",brand:"Apple",Price:18000}
]

function findingPhone(products,search){
    let matched = [];
    for (const element of products) {
        if(element.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(element);
        }
    }
    return matched;
}

let output = findingPhone(products,'Mobile');
console.log("Matched Phone: ",output);