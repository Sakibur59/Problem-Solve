function longest(word){
    let a = word.split(" ")
    let large = a[0];
    //  console.log(a)
    for (const element of a) {
        if(element.length > large.length){
            large=element;
        }
    }
    return large;
}

let output = longest("I am learning Programming to become a programmer");

console.log(output);