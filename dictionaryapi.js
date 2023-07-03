// fetch () api --non-blocking /assychronus

// we can write assynchronus by creating our own promises
//--.research on how to create promises in js -- new promise -- then.catch
//alternatively you could use async await

console.log("Hello 1");
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hover")
  .then((resp) => resp.json())
  .then((data) => {
    // consume the data --- creating elements
    //console.log(data[0].meanings[0].definitions);
    console.log(data);

    let definitionE1 = document.createElement("h2");
    let WordE1 = document.createElement("h1");

    definitionE1.append(data[0].meanings[0].definitions[0].definition);
    WordE1.append(data[0].word);

    document.body.appendChild(wordE1);
    document.body.append(definitionE1);

    document.body.h1.style.margin = "100px".catch((err) => {
      console.log(err);
    });
    //console.log("Hello 2");
    //console.log("Hello 1");

    let age = 30;
    console.log("I am" + age + " yrs old"); // string concatenation
    console.log(`I am ${age} yrs old.`); //template literals
  });

let CardE1 = document.getElementById("card");
CardE1.style.border = "2px solid red";
CardE1.style.padding = "10px";

if (age > 18) {
  CardE1.setAttribute("class", "card light-bg");
}

let pE1 = document.querySelector("p");
console.log(pE1.classList.remove("peru"));
console.log(pE1.classList.contains("p")); //false
console.log(pE1.classList.contains("peru")); //true
// difference between a nodelist and html collection in DOM manipilation
