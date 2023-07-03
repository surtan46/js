const person = {
  name: null,
  age: null,
  sing: function (song) {
    console.log("I am singing!!!!!");
    console.log("My song is" + song);
  },
};

const person1 = Object.create(person);
console.log(person1.sing("Rapstar"));
person1.name = "Albert";
person1.age = 18;

const person2 = Object.create(person);
console.log(person2.sing("Rockstar"));
person2.name = "Collins";
person2.age = 90;

console.log(person1);
console.log(person2.name.toUpperCase()); // COLLINS
console.log(person2.name.lenght); //7

//prototype chaining in javascript
