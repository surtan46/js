//functions are re-usable blockes of code

//define a function
let count = 0;
function printName() {
  count = count + 1;
  console.log("re-usable code");
  console.log("hello,i am Albert");
  console.log("Performing some operations");
}

// console.log("global scope");
//call/invoke the function to execute the block of code
//printName(); //1
//printName(); //2
//printName();
//printName();
//printName();
//printName();
//console.log(count); //6

function getAreaOfCircle(radius) {
  let result = 3.142 * radius ** 2;
  console.log("Area is:" + result);
  return result;
}
function getAreaOfRectangle(w, h) {
  console.log("Area is" + w * h);
  return w * h;
}

//getAreaOfCircle(7); //153.958
//getAreaOfCircle(14); //615.832
//getAreaOfCircle(21); // 1385.622

getAreaOfRectangle(2, 4); //8
getAreaOfRectangle(4, 5); //20
getAreaOfRectangle(465, 5882); //2735130

console.log(getAreaOfRectangle(2, 4)); // undefined for functions that have no return value--with a return value,we get the returned value
console.log(getAreaOfCircle(9));

//Discuss the different naming conventions in web programming  (css classes and javascript variables)
//Discuss the variable naming rules in javascript
//Discuss the different types of errors in javascript and when they occur

//write a function called reverseString that takes a string as a parameter and returns the reversed version of that string.
