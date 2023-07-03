// sequence, conditional statements(if else,switch) and loops/iterations(for,while)

if (true) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

//multiple conditions -- exam grading
let grade = "A";
if ((grade = "A")) {
  console.log("Very  Good");
} else if (grade == "B") {
  console.log("Good");
} else if (grade == "C") {
  console.log("Pass");
} else {
  console.log("Fail");
}

let color = "green";

switch (color) {
  case "green":
    console.log("Agriculture/Earth");
    break;
  case "red":
    console.log("Blood lost fighting for indepemdence");
    break;
  case "black":
    console.log("The people");
    break;
  case "white":
    console.log("peace");
    break;
  default:
    console.log("Not a color in our flag !!");
}

//loops/interation

let count = 0;

//while (count < 10) {
//console.log(count);
// count++;
//}

//for

for (count; count < 10; count++) {
  console.log(count);
}

//task
//write a function that returns the average of elements in an array of numbers

let numbersArray = [1, 2, 30, 4, 34, 345, 334, 5];
