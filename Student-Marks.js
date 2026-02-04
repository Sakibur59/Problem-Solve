function analyzeMarks(marksObj) {
  let total = 0;
  let highest= -Infinity;
  let lowest = Infinity;
  let highestSubject = null;
  let lowestSubject = null;

  for (let key in marksObj) {
    let mark = marksObj[key];
    total = total + mark;
    if (mark > highest) {
        highest = mark;
        highestSubject = key;
    }
    if (mark < lowest) {
        lowest=mark
        lowestSubject = key;
    }
  }
  
  let avg = total / Object.keys(marksObj).length;

  return {
    total,
    avg,
    highestSubject,
    lowestSubject,
  };
}

let marks = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 ,Numerical: 98});

console.log(marks);
