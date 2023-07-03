const colors = ["aqua", "green", "blue", "pink", "yellow"];

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  //document.body.style.backgroundColor = colors[Math.floor(Math.random() * 4)];

  if (window.scrollY > 400) {
    document.getElementById("scrollbtn").style.display = "block";
  } else {
    document.getElementById("scrollbtn").style.display = "none";
  }
});

document.getElementById("scrollbtn").addEventListener("click", () => {
  console.log("scrollbtn clicked!!!");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let menuBtnE1 = document.querySelector(".menubtn");
let mobileNavE1 = document.querySelector(".mobile-nav");

menuBtnE1.addEventListener("click", () => {
  console.log("btn cli");
  if (mobileNavE1.style.display == "none" || !mobileNavE1.style.display) {
    mobileNavE1.style.display = "block";
    //menuBtnE1.children[0].setAttribute("name", "close-outline");
  } else {
    mobileNavE1.style.display = "none";
    //  menuBtnE1.children[0].setAttribute("name", "grid-outline");
  }
});

document.querySelector(".closebtn").addEventListener("click", () => {
  mobileNavE1.style.display = "none";
});

//  event propagation delegation in javascript --event bubbling

// stop an event from getting an element's children
document.querySelector(".mobile-nav").addEventListener("click", () => {
  mobileNavE1.style.display = "none";
});

// forms
  

