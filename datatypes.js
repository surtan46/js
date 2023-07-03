// primitive and non-primitive data types

// primitive--string, number, boolean, null, undefined

//non-primitives -- object, array, function

let string = "bhhekeyguu#@$%^&*"; // string
let number = 323.32332332323; //number
let isTal = true; // boolean
let isDark = false; // boolean
let age; // undefined
let rating = null; //null

string = 90;

//typeof -- used to check data types

console.log(typeof string); // 90
console.log(typeof isTall); // boolean
//console.log(ago); // not defined
console.log(age + age); // NaN - Not a number
let anotheNumber = 90;
console.log(number + anotheNumber); // 323.3232 + 90
// scoping

// non-primitives -- object, array, function
//object

let person1 = {
  username: "Albert",
  age: 28,
  height: 6.2,
  race: "african",
  religion: { name: "islam", dayOfWorship: "friday" },
};

let person2 = {
  username: "Collins",
  age: 18,
  favColor: "green",
  isKenyan: false,
  religion: {
    name: "christian",
    dayOfWorship: "saturday",
  },
};
// acessing values in an object--use dot notation
console.log(person1.username + "is a" + person1.religion.name);
console.log(person2.username + "is a" + person2.religion.name);
//string concatenation -- using + symbol to combine strings

// JSON data format-- Javascript Object Notation
// array ---list(python)
//array is made up of elements seperated by a comma
let colors = ["blue", "black", "yellow"];

let data = [89, true, "old", "mombasa", undefined];

//console.log(typeof colors);//object

//arrays are zero-indexed--this means elements of the array are ordered by indices starting with 0

console.log(colors[0]); //element in colors array at index 0 - blue
console.log(colors[1]); //element in colors array at index 1 - black
console.log(data[3]); //element in colors array at index 3 - mombasa
