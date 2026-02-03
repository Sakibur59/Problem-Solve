function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}

function calculation(a,b,operator){
    if(operator === 'add'){
        const total = add(a,b);
    return total;
    }
    if(operator === 'sub'){
        const total = sub(a,b);
    return total;
    }
    if(operator === 'mul'){
        const total = mul(a,b);
    return total;
    }
    if(operator === 'div'){
        const total = div(a,b);
    return total;
    }
    
   
}

const result = calculation(20,5,'div');
console.log(result);