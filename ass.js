//- Given an array of numbers, write a function that calculates the average of the numbers. //DONE

const numbersArray = [23, 45, 87, 322, 456, 78, 345];

function getaverage(arr) {
  if (!arr.length) return 0;

  const sum = arr.reduce((total, num) => total + num);
  return sum / arr.length;
}
const average = getaverage(numbersArray);
console.log(average); //193.714

//- Given an array of numbers, write a function that finds the maximum number in the array.

function findMax (arr) {
  let max = arr[0];
  for (let i =1; < arr .length ; i++) {
if (arr[i]>max) {
  max=arr[i];
}
  }
  return max;
}

