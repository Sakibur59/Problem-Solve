function wordFrequency(sentence) {
    let word = sentence.split(' ');
    let count = {};

    for (const element of word) {
        let lowerCase = element.toLowerCase();
        if(count.hasOwnProperty(lowerCase)) {
            count[lowerCase]++
        }
        else {
            count[lowerCase] = 1;
        }
    }
    return count;
}

let sentence = wordFrequency("I love JS and I love coding also learn Framework");

console.log(sentence);