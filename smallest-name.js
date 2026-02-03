const names= ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(names){
    let name = names[0];
    for (const element of names) {
        if(element.length < name.length){
            name = element;
        }
    }
    return name;
}

let small = smallName(names);
console.log("Smallest Name: ",small);