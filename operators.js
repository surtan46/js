// arithmetic operators -+ * / % ++ -- console.log(8 * 8);
console.log(8 / 8);
console.log(8 + 8);
console.log(8 - 8);
console.log(9 % 8); //modulus--get remainder after division
// + increment --decrement
console.log("***************");
let rating = 0;
rating++;
console.log(rating); //1
rating--;
--rating;
rating--;
console.log(rating); //0

//comparison operators == === != > < >= <=
console.log("***************");

console.log(2023 - 2008 > 18); //false
console.log("age" == "age"); // false
console.log("age" != "age"); //true
console.log(34 == "34"); // TYPE COERCION --true//lose equality check
console.log(34 == "34"); // NO TYPE COERCION --false//strict eqauality check

//boolean--true or false

// console/log("Result": + 90); //TYPE COERCION --true

//logical operators &&(AND) ,||(OR), (NOT)
let person = {
  name: "Victor",
  age: 20,
  nationality: "Kenyan",
};
if (person.age >= 18 ||  person.nationality == "Kenyan") {
  console.log("Jambo! Karibu Maasai Mara");
} else {
  console.log("You could be a foreigner or below age 18 ");
}

//ternary operator--- control stractures
person.age >= 18 ||  person.nationality == "Kenyan" ?  console.log("Jambo! Karibu Maasai Mara");
console.log("You could be a foreigner or below age 18 "); 
  
   
  
