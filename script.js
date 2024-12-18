"use strict";

function calculateAverage(arr) {
  const numbers = arr.filter(item => typeof item === 'number' && !isNaN(item));

  if (numbers.length === 0) {
    return null;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return sum / numbers.length;
}

const data = [1, NaN, 12, '123', 2, null, { a: 10 }];
const average = calculateAverage(data);
console.log(average); 



