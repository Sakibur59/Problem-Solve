function count_zero(numbers){
    let spilt = numbers.split(" ")
    let count = 0;
    for (const element of spilt) {
        if(element === "0"){
            count++;
        }
    }
    return count;
}

let output = count_zero("1 0 0 1 0 1 0 1 0");
console.log("Total Zero: ",output);