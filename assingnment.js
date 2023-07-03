const numbersArray = [1, 2, 30, 4, 34, 345, 334, 5];

function getaverage(arr) {
  if (!arr.length) return 0;

  const sum = arr.reduce((total, num) => total + num);
  return sum / arr.length;
}

const average = getaverage(numbersArray);
console.log(average); //89.625

function logSquare(num) {
  if (typeof num === "number") {
    console.log(num ** 2);
  } else {
    console.log("invalid argument type.Please pass a number.");
  }
}
logSquare(2);
logSquare(7);
logSquare(9);
logSquare(789);
logSquare("georg");

// write a function that returns the average of elements in an arrray of numbers

let arr = [98, 34, 23, 2, 4, 6, 35445, 6, 8];

function avg(array) {
  let sum = 0;
  for (let elem in array) {
    sum = sum + array[index];
  }
  //console.log(sum);
  return sum / array.length;
}
console.log(avg(arr));
function avgReduce() {
  return arr.reduce((elem, nextelem) => elem + nextelem); arr.
  length
}

console.log(avgReduce(arr));
