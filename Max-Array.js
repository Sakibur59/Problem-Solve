function Max(numbers){
    let max = numbers[0];
    for (const element of numbers) {
        if(element>max){
            max = element;
        }
    }
    return max;
}

const numbers=[344,24,5,687,23,56,64,87,90];
const max =Max(numbers);
console.log("Max number of an array is: ",max)

//min value of an array
function Min(numbers){
    let min = numbers[0];
    for (const element of numbers) {
        if(element<min){
            min = element;
        }
    }
    return min;
}

const numbers2=[344,24,5,687,23,56,64,87,90,1];
const min =Min(numbers2);
console.log("Min number of an array is: ",min);